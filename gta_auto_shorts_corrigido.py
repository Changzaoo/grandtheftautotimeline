import os
import re
import json
import math
import time
import shutil
import random
import subprocess
from pathlib import Path
from datetime import datetime, timezone

from yt_dlp import YoutubeDL


DOWNLOAD_DIR = Path(r"C:\Users\vinicius\Videos\OpenClawEditor\downloads")
OUTPUT_DIR = Path(r"C:\Users\vinicius\Videos\OpenClawEditor\saida")
REPORT_DIR = Path(r"C:\Users\vinicius\Videos\OpenClawEditor\buscas")

DOWNLOAD_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
REPORT_DIR.mkdir(parents=True, exist_ok=True)

THEME_KEYWORDS = [
    "gta", "gta 5", "gta v", "gta san andreas", "gta vice city",
    "police chase", "perseguiÃ§Ã£o policial", "chaos", "caos",
    "explosion", "explosÃ£o", "funny", "engraÃ§ado", "bug",
    "glitch", "rare glitch", "nostalgia", "gta 6", "gta vi"
]

VIRAL_KEYWORDS = [
    "police chase", "perseguiÃ§Ã£o", "wanted level", "5 stars", "6 stars",
    "explosion", "explosions", "caos", "chaos", "funny", "engraÃ§ado",
    "bug", "glitch", "rare", "insane", "crazy", "epic", "gta 6",
    "nostalgia", "san andreas", "vice city"
]

NEGATIVE_KEYWORDS = [
    "full walkthrough", "walkthrough", "mission complete",
    "longplay", "livestream", "stream", "no commentary full",
    "mod menu tutorial", "download mod", "cheat tutorial"
]


def run(cmd):
    print(" ".join(str(x) for x in cmd))
    subprocess.run(cmd, check=True)


def check_dependencies():
    if shutil.which("ffmpeg") is None:
        raise RuntimeError("FFmpeg nÃ£o encontrado no PATH.")
    if shutil.which("ffprobe") is None:
        raise RuntimeError("FFprobe nÃ£o encontrado no PATH.")


def sanitize_filename(name):
    name = re.sub(r'[\\/:*?"<>|]+', "_", name)
    name = re.sub(r"\s+", " ", name).strip()
    return name[:120]


def search_videos():
    queries = [
        "GTA police chase explosion funny glitch",
        "GTA 5 chaos police chase explosions funny",
        "GTA San Andreas rare bug funny police chase",
        "GTA Vice City nostalgia funny chaos",
        "GTA 6 trailer funny moments chaos",
        "GTA V 5 stars police chase explosion",
        "GTA funny ragdoll police chase glitch",
    ]

    results = []

    ydl_opts = {
        "quiet": True,
        "skip_download": True,
        "extract_flat": False,
        "ignoreerrors": True,
        "noplaylist": True,
    }

    with YoutubeDL(ydl_opts) as ydl:
        for query in queries:
            print(f"Buscando: {query}")
            data = ydl.extract_info(f"ytsearch15:{query}", download=False)
            if not data or "entries" not in data:
                continue

            for entry in data["entries"]:
                if not entry:
                    continue
                results.append(entry)

    unique = {}
    for item in results:
        url = item.get("webpage_url") or item.get("url")
        if url:
            unique[url] = item

    return list(unique.values())


def score_video(video):
    title = (video.get("title") or "").lower()
    description = (video.get("description") or "").lower()
    text = title + " " + description

    duration = video.get("duration") or 0
    views = video.get("view_count") or 0
    likes = video.get("like_count") or 0
    comments = video.get("comment_count") or 0

    score = 0.0

    # DuraÃ§Ã£o ideal para extrair shorts: entre 25s e 8min.
    if 25 <= duration <= 480:
        score += 25
    elif 481 <= duration <= 900:
        score += 10
    else:
        score -= 20

    # Popularidade.
    score += min(math.log10(max(views, 1)) * 8, 55)
    score += min(math.log10(max(likes, 1)) * 5, 25)
    score += min(math.log10(max(comments, 1)) * 3, 15)

    # Palavras com potencial viral.
    for kw in VIRAL_KEYWORDS:
        if kw in text:
            score += 8

    # Penalidades.
    for kw in NEGATIVE_KEYWORDS:
        if kw in text:
            score -= 25

    # Bonus para tÃ­tulos curtos e com impacto.
    if len(title) <= 80:
        score += 8

    # Bonus por GTA explÃ­cito.
    if "gta" in text:
        score += 20

    return score


def choose_best(candidates):
    scored = []
    for video in candidates:
        try:
            s = score_video(video)
            scored.append((s, video))
        except Exception:
            continue

    scored.sort(key=lambda x: x[0], reverse=True)

    print("\nTop candidatos:")
    for s, v in scored[:10]:
        print(f"{s:.2f} | {v.get('title')} | {v.get('webpage_url')}")

    if not scored:
        raise RuntimeError("Nenhum candidato vÃ¡lido encontrado.")

    return scored[0][1], scored[0][0]


def download_video(video):
    title = sanitize_filename(video.get("title") or "gta_video")
    outtmpl = str(DOWNLOAD_DIR / f"{title}.%(ext)s")

    ydl_opts = {
        "format": "bv*[height<=1080]+ba/b[height<=1080]/best",
        "outtmpl": outtmpl,
        "merge_output_format": "mp4",
        "noplaylist": True,
        "quiet": False,
    }

    url = video.get("webpage_url") or video.get("url")
    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filepath = ydl.prepare_filename(info)
        filepath = str(Path(filepath).with_suffix(".mp4"))

    if not Path(filepath).exists():
        # Fallback: procurar mp4 mais recente.
        files = sorted(DOWNLOAD_DIR.glob("*.mp4"), key=lambda p: p.stat().st_mtime, reverse=True)
        if not files:
            raise RuntimeError("Download concluÃ­do, mas arquivo MP4 nÃ£o encontrado.")
        filepath = str(files[0])

    return Path(filepath)


def ffprobe_duration(path):
    cmd = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "json",
        str(path)
    ]
    data = subprocess.check_output(cmd, text=True, encoding="utf-8")
    parsed = json.loads(data)
    return float(parsed["format"]["duration"])


def detect_strong_segment(video_path, target_len=28):
    """
    HeurÃ­stica simples:
    - se o vÃ­deo for curto, usa quase tudo;
    - se for longo, tenta pegar trecho apÃ³s o inÃ­cio, onde geralmente hÃ¡ aÃ§Ã£o;
    - adiciona leve aleatoriedade controlada para evitar sempre os mesmos segundos.
    """
    duration = ffprobe_duration(video_path)

    if duration <= target_len + 4:
        return 0, max(5, duration - 0.5)

    # Evita intro e final.
    safe_start = max(3, duration * 0.12)
    safe_end = max(safe_start + target_len, duration * 0.82)

    # Preferir regiÃ£o de aÃ§Ã£o entre 20% e 65%.
    preferred_start = duration * 0.22
    preferred_end = duration * 0.62

    start_min = max(safe_start, preferred_start)
    start_max = min(preferred_end, duration - target_len - 2)

    if start_max <= start_min:
        start_min = safe_start
        start_max = duration - target_len - 2

    start = random.uniform(start_min, start_max)
    return start, target_len


def make_vertical_short(input_path, output_path, start, length):
    """
    Converte para 9:16.
    EstratÃ©gia:
    - escala para altura 1920;
    - se necessÃ¡rio corta largura central 1080;
    - aplica blur de fundo quando o vÃ­deo original nÃ£o encaixa bem;
    - normaliza Ã¡udio com loudnorm.
    """
    filter_complex = (
        "[0:v]split=2[bg][fg];"
        "[bg]scale=1080:1920:force_original_aspect_ratio=increase,"
        "crop=1080:1920,boxblur=28:1[bgv];"
        "[fg]scale=1080:1920:force_original_aspect_ratio=decrease[fgv];"
        "[bgv][fgv]overlay=(W-w)/2:(H-h)/2,"
        "fps=30,format=yuv420p[v];"
        "[0:a]loudnorm=I=-14:TP=-1.5:LRA=11[a]"
    )

    cmd = [
        "ffmpeg", "-y",
        "-ss", str(start),
        "-t", str(length),
        "-i", str(input_path),
        "-filter_complex", filter_complex,
        "-map", "[v]",
        "-map", "[a]",
        "-c:v", "libx264",
        "-preset", "medium",
        "-crf", "20",
        "-c:a", "aac",
        "-b:a", "192k",
        "-movflags", "+faststart",
        str(output_path)
    ]

    run(cmd)


def generate_metadata(video):
    title = "O caos de GTA saiu do controle"
    description = (
        "PerseguiÃ§Ã£o, explosÃµes e aquele caos clÃ¡ssico de GTA em formato short. "
        "Um momento perfeito para quem ama GTA, bugs inesperados e nostalgia."
    )
    hashtags = [
        "#GTA", "#GTAV", "#GTA5", "#GTA6", "#GTAChaos",
        "#Gaming", "#Shorts", "#TikTokGaming", "#Reels",
        "#PoliceChase", "#FunnyGaming", "#GamerBR"
    ]
    thumbnail = (
        "Frame no momento da explosÃ£o ou perseguiÃ§Ã£o, com carro voando/polÃ­cia atrÃ¡s. "
        "Texto grande: 'GTA SAIU DO CONTROLE'. Usar cores amarelo/vermelho e contorno preto."
    )
    opening_caption = "Quando vocÃª ganha 5 estrelas por acidente..."

    return title, description, hashtags, thumbnail, opening_caption


def write_report(video, score, downloaded_path, final_path, metadata):
    title, description, hashtags, thumbnail, opening_caption = metadata

    now = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report_path = REPORT_DIR / f"relatorio_gta_auto_shorts_{now}.txt"

    chosen_title = video.get("title") or "Sem tÃ­tulo"
    chosen_url = video.get("webpage_url") or video.get("url") or "URL nÃ£o encontrada"

    reason = (
        f"Escolhido automaticamente por maior pontuaÃ§Ã£o viral ({score:.2f}). "
        "O vÃ­deo combina tema GTA com elementos de alto potencial para Shorts: "
        "caos, perseguiÃ§Ã£o policial, explosÃµes, humor, bugs/glitches ou nostalgia. "
        "TambÃ©m teve boa relaÃ§Ã£o entre popularidade, duraÃ§Ã£o e palavras-chave de impacto."
    )

    content = f"""RELATÃRIO GTA AUTO SHORTS

1. VÃ­deo escolhido:
{chosen_title}
{chosen_url}

2. Motivo da escolha:
{reason}

3. Caminho do arquivo baixado:
{downloaded_path}

4. Caminho do vÃ­deo final:
{final_path}

5. TÃ­tulo:
{title}

6. DescriÃ§Ã£o:
{description}

7. Hashtags:
{" ".join(hashtags)}

8. Ideia de thumbnail:
{thumbnail}

9. Legenda de abertura:
{opening_caption}
"""

    report_path.write_text(content, encoding="utf-8")
    return report_path


def main():
    check_dependencies()

    print("Iniciando busca automÃ¡tica de vÃ­deos GTA...")
    candidates = search_videos()

    print(f"Total de candidatos encontrados: {len(candidates)}")
    best, score = choose_best(candidates)

    print("\nVÃ­deo escolhido:")
    print(best.get("title"))
    print(best.get("webpage_url"))

    downloaded = download_video(best)

    print(f"\nArquivo baixado: {downloaded}")

    start, length = detect_strong_segment(downloaded, target_len=28)

    final_name = f"gta_short_{datetime.now().strftime('%Y%m%d_%H%M%S')}.mp4"
    final_path = OUTPUT_DIR / final_name

    print(f"\nCortando trecho forte: inÃ­cio={start:.2f}s duraÃ§Ã£o={length:.2f}s")
    make_vertical_short(downloaded, final_path, start, length)

    metadata = generate_metadata(best)

    report_path = write_report(best, score, downloaded, final_path, metadata)

    print("\nProcesso concluÃ­do.")
    print(f"VÃ­deo final: {final_path}")
    print(f"RelatÃ³rio: {report_path}")


if __name__ == "__main__":
    main()

