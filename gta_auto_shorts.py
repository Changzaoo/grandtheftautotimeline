import json
import math
import random
import re
import shutil
import subprocess
from pathlib import Path
from datetime import datetime

from yt_dlp import YoutubeDL

BASE_DIR = Path(r"C:\Users\vinicius\Videos\OpenClawEditor")
DOWNLOAD_DIR = BASE_DIR / "downloads"
OUTPUT_DIR = BASE_DIR / "saida"
REPORT_DIR = BASE_DIR / "buscas"

for folder in (DOWNLOAD_DIR, OUTPUT_DIR, REPORT_DIR):
    folder.mkdir(parents=True, exist_ok=True)

SEARCH_QUERIES = [
    "GTA 5 no copyright gameplay police chase",
    "GTA 5 Creative Commons police chase chaos",
    "GTA 5 funny moments no copyright gameplay",
    "GTA San Andreas no copyright gameplay funny",
    "GTA V police chase gameplay no commentary",
]

VIRAL_WORDS = [
    "police", "chase", "perseguicao", "perseguição", "chaos", "caos", "explosion",
    "explosao", "explosão", "funny", "engracado", "engraçado", "bug", "glitch",
    "insane", "crazy", "epic", "5 stars", "wanted", "gta 5", "gta v", "gta san andreas"
]

BAD_WORDS = [
    "full walkthrough", "longplay", "livestream", "live stream", "stream", "mod menu",
    "download mod", "cheat tutorial", "hack", "crack", "pirated"
]


def run(cmd):
    print("Executando:", " ".join(str(x) for x in cmd))
    subprocess.run(cmd, check=True)


def check_dependencies():
    missing = []
    for exe in ["ffmpeg", "ffprobe"]:
        if shutil.which(exe) is None:
            missing.append(exe)
    if missing:
        raise RuntimeError("Dependencias ausentes no PATH: " + ", ".join(missing))


def sanitize_filename(text):
    text = re.sub(r'[\\/:*?"<>|]+', "_", text)
    text = re.sub(r"\s+", " ", text).strip()
    return text[:100] or "video_gta"


def ydl_base_opts():
    return {
        "quiet": False,
        "ignoreerrors": True,
        "noplaylist": True,
        "socket_timeout": 20,
        "retries": 3,
        "fragment_retries": 3,
        "skip_unavailable_fragments": True,
        "nocheckcertificate": True,
        "extractor_args": {
            "youtube": {
                "player_client": ["default", "ios"]
            }
        },
    }


def search_videos():
    results = []
    opts = ydl_base_opts()
    opts.update({
        "skip_download": True,
        "extract_flat": "in_playlist",
        "quiet": True,
    })

    with YoutubeDL(opts) as ydl:
        for query in SEARCH_QUERIES:
            print(f"\nBuscando: {query}")
            try:
                data = ydl.extract_info(f"ytsearch8:{query}", download=False)
            except Exception as e:
                print(f"Falha na busca '{query}': {e}")
                continue

            entries = (data or {}).get("entries") or []
            for item in entries:
                if not item:
                    continue
                url = item.get("url") or item.get("webpage_url")
                if url and not str(url).startswith("http"):
                    url = f"https://www.youtube.com/watch?v={url}"
                if url:
                    item["webpage_url"] = url
                    results.append(item)

    unique = {}
    for item in results:
        unique[item.get("webpage_url")] = item
    return list(unique.values())


def score_video(video):
    title = (video.get("title") or "").lower()
    duration = video.get("duration") or 0
    views = video.get("view_count") or 0

    score = 0.0

    if 20 <= duration <= 600:
        score += 30
    elif duration and duration <= 1200:
        score += 10
    else:
        score -= 15

    if views:
        score += min(math.log10(max(views, 1)) * 8, 45)

    if "gta" in title:
        score += 20

    for word in VIRAL_WORDS:
        if word in title:
            score += 7

    for word in BAD_WORDS:
        if word in title:
            score -= 30

    if len(title) <= 90:
        score += 5

    return score


def choose_best(candidates):
    scored = [(score_video(v), v) for v in candidates]
    scored.sort(key=lambda x: x[0], reverse=True)

    print("\nTop candidatos:")
    for score, video in scored[:10]:
        print(f"{score:.2f} | {video.get('title')} | {video.get('webpage_url')}")

    if not scored:
        raise RuntimeError("Nenhum video encontrado.")

    return scored[0][1], scored[0][0]


def download_video(video):
    title = sanitize_filename(video.get("title") or "gta_video")
    outtmpl = str(DOWNLOAD_DIR / f"{title}.%(ext)s")
    url = video.get("webpage_url")

    opts = ydl_base_opts()
    opts.update({
        "format": "bv*[height<=1080]+ba/b[height<=1080]/best",
        "outtmpl": outtmpl,
        "merge_output_format": "mp4",
        "quiet": False,
    })

    with YoutubeDL(opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filepath = Path(ydl.prepare_filename(info)).with_suffix(".mp4")

    if not filepath.exists():
        files = sorted(DOWNLOAD_DIR.glob("*.mp4"), key=lambda p: p.stat().st_mtime, reverse=True)
        if not files:
            raise RuntimeError("Download terminou, mas nenhum MP4 foi encontrado.")
        filepath = files[0]

    return filepath


def get_duration(path):
    cmd = [
        "ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "json", str(path)
    ]
    raw = subprocess.check_output(cmd, text=True, encoding="utf-8", errors="ignore")
    return float(json.loads(raw)["format"]["duration"])


def pick_segment(path, target_len=28):
    duration = get_duration(path)
    if duration <= target_len + 3:
        return 0, max(5, duration - 0.5)
    start_min = max(3, duration * 0.15)
    start_max = max(start_min, min(duration * 0.65, duration - target_len - 2))
    return random.uniform(start_min, start_max), target_len


def make_vertical(input_path, output_path, start, length):
    filter_complex = (
        "[0:v]split=2[bg][fg];"
        "[bg]scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,boxblur=24:1[bgv];"
        "[fg]scale=1080:1920:force_original_aspect_ratio=decrease[fgv];"
        "[bgv][fgv]overlay=(W-w)/2:(H-h)/2,fps=30,format=yuv420p[v];"
        "[0:a]loudnorm=I=-14:TP=-1.5:LRA=11[a]"
    )
    cmd = [
        "ffmpeg", "-y", "-ss", f"{start:.2f}", "-t", f"{length:.2f}", "-i", str(input_path),
        "-filter_complex", filter_complex,
        "-map", "[v]", "-map", "[a]",
        "-c:v", "libx264", "-preset", "medium", "-crf", "20",
        "-c:a", "aac", "-b:a", "192k", "-movflags", "+faststart", str(output_path)
    ]
    run(cmd)


def write_report(video, score, downloaded, final_path):
    now = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report = REPORT_DIR / f"relatorio_gta_auto_shorts_{now}.txt"
    title = video.get("title") or "Sem titulo"
    url = video.get("webpage_url") or "URL nao encontrada"

    content = f"""RELATORIO GTA AUTO SHORTS

Video escolhido:
{title}
{url}

Motivo da escolha:
Pontuacao automatica: {score:.2f}. O video foi escolhido por relevancia com GTA, potencial de caos/acao/humor e duracao aproveitavel.

Arquivo baixado:
{downloaded}

Video final:
{final_path}

Titulo sugerido:
O caos de GTA saiu do controle

Descricao:
Um momento de GTA com caos, perseguicao e aquela loucura classica da franquia.

Hashtags:
#GTA #GTAV #GTA5 #GTA6 #Gaming #Shorts #Reels #TikTokGaming #GamerBR

Ideia de thumbnail:
Frame com carro, policia ou explosao. Texto: GTA SAIU DO CONTROLE

Legenda de abertura:
Quando voce ganha estrelas demais no GTA...
"""
    report.write_text(content, encoding="utf-8")
    return report


def main():
    check_dependencies()
    print("Iniciando automacao GTA Auto Shorts v2...")
    candidates = search_videos()
    print(f"\nTotal de candidatos encontrados: {len(candidates)}")
    best, score = choose_best(candidates)
    downloaded = download_video(best)
    start, length = pick_segment(downloaded, 28)
    final_path = OUTPUT_DIR / f"gta_short_{datetime.now().strftime('%Y%m%d_%H%M%S')}.mp4"
    make_vertical(downloaded, final_path, start, length)
    report = write_report(best, score, downloaded, final_path)
    print("\nProcesso concluido.")
    print(f"Video final: {final_path}")
    print(f"Relatorio: {report}")


if __name__ == "__main__":
    main()
