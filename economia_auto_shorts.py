# economia_auto_shorts.py
# Automacao para buscar, escolher, baixar e preparar videos curtos sobre economia.
# Recomendacao: use apenas conteudos com permissao, Creative Commons, seus proprios videos
# ou materiais permitidos para comentario/analise transformativa.

import json
import math
import random
import re
import shutil
import subprocess
from datetime import datetime
from pathlib import Path

from yt_dlp import YoutubeDL


BASE_DIR = Path(r"C:\Users\vinicius\Videos\OpenClawEditor")
DOWNLOAD_DIR = BASE_DIR / "downloads"
OUTPUT_DIR = BASE_DIR / "saida"
REPORT_DIR = BASE_DIR / "buscas"
TEMP_DIR = BASE_DIR / "temp"

for folder in [DOWNLOAD_DIR, OUTPUT_DIR, REPORT_DIR, TEMP_DIR]:
    folder.mkdir(parents=True, exist_ok=True)


# =========================
# REGRAS DO CANAL
# =========================

CONTENT_RULES = """
Voce e um agente autonomo de criacao de videos educativos sobre economia.

Objetivo:
Criar videos para TikTok, YouTube Shorts e Instagram Reels com aprendizado real,
boa qualidade visual, contexto semantico e continuidade narrativa.

Regras:
1. Todo video precisa ensinar algo.
2. O video precisa ter contexto semantico.
3. A narrativa deve ter comeco, meio e fim.
4. Nao cortar conteudo essencial.
5. Sempre que possivel, explicar: problema -> causa -> exemplo real -> consequencia -> conclusao.
6. Explicar economia para iniciantes, sem usar termos tecnicos sem explicar.
7. Evitar conteudo puramente sensacionalista.
8. Nao inventar dados atuais. Se nao houver fonte, usar linguagem de estimativa.
9. Priorizar boa qualidade visual: graficos, dinheiro, bancos, mercado, consumo, bolsa, celular, cartao, moedas.
10. O video deve prender atencao nos primeiros 2 segundos.
"""


# =========================
# CONFIGURACOES DE BUSCA
# =========================

QUERIES = [
    "economia explicada inflação juros dinheiro",
    "inflação explicada de forma simples",
    "como a selic afeta sua vida",
    "por que tudo está caro economia",
    "educação financeira para iniciantes dinheiro",
    "como bancos ganham dinheiro explicado",
    "dólar alto explicado economia",
    "crise econômica explicada simples",
    "bitcoin explicado economia dinheiro",
    "poder de compra salário inflação",
    "cartão de crédito juros explicação simples",
    "bolsa de valores para iniciantes explicação",
    "renda passiva explicada educação financeira",
    "dívida pública explicada economia",
    "por que imóveis são caros economia",
]

VIRAL_KEYWORDS = [
    "inflação", "inflacao", "juros", "selic", "dólar", "dolar", "crise",
    "dinheiro", "salário", "salario", "poder de compra", "cartão de crédito",
    "cartao de credito", "banco", "bancos", "bitcoin", "investimento",
    "investimentos", "renda passiva", "bolsa de valores", "finanças",
    "financas", "economia", "preços", "precos", "mercado", "dívida",
    "divida", "governo", "imposto", "rico", "pobre", "classe média",
    "classe media", "educação financeira", "educacao financeira"
]

NEGATIVE_KEYWORDS = [
    "live completa", "livestream", "curso completo", "aula completa",
    "compilado", "podcast completo", "full podcast", "cortes aleatórios",
    "cortes aleatorios", "react", "reagindo", "meme", "aposta", "bet",
    "sinais", "fique rico rapido", "ganhe dinheiro facil"
]


# =========================
# UTILIDADES
# =========================

def run(cmd):
    print("Executando:", " ".join(str(x) for x in cmd))
    subprocess.run(cmd, check=True)


def check_dependencies():
    missing = []
    if shutil.which("ffmpeg") is None:
        missing.append("ffmpeg")
    if shutil.which("ffprobe") is None:
        missing.append("ffprobe")
    if missing:
        raise RuntimeError(
            "Ferramentas faltando no PATH: "
            + ", ".join(missing)
            + "\nInstale FFmpeg e reinicie o PowerShell."
        )


def sanitize_filename(name):
    name = re.sub(r'[\\/:*?"<>|]+', "_", str(name))
    name = re.sub(r"\s+", " ", name).strip()
    return name[:110] if name else "video_economia"


def normalize_text(text):
    return (text or "").lower()


def ffprobe_duration(path):
    cmd = [
        "ffprobe",
        "-v", "error",
        "-show_entries", "format=duration",
        "-of", "json",
        str(path),
    ]
    data = subprocess.check_output(cmd, text=True, encoding="utf-8", errors="ignore")
    parsed = json.loads(data)
    return float(parsed["format"]["duration"])


# =========================
# BUSCA E ESCOLHA
# =========================

def search_videos():
    """
    Busca mais leve:
    - usa extract_flat=True para nao abrir pagina detalhada de cada video na busca;
    - evita travar em alguns resultados do YouTube;
    - depois o download extrai apenas o video escolhido.
    """
    candidates = []

    ydl_opts = {
        "quiet": True,
        "skip_download": True,
        "extract_flat": True,
        "ignoreerrors": True,
        "noplaylist": True,
        "socket_timeout": 20,
        "retries": 2,
        "fragment_retries": 2,
        "source_address": "0.0.0.0",
        "cachedir": False,
        "compat_opts": ["no-youtube-unavailable-videos"],
    }

    # Se o Deno estiver instalado, o yt-dlp usara quando necessario.
    if shutil.which("deno"):
        ydl_opts["js_runtimes"] = {"deno": {}}

    with YoutubeDL(ydl_opts) as ydl:
        for query in QUERIES:
            try:
                print(f"\nBuscando: {query}")
                data = ydl.extract_info(f"ytsearch10:{query}", download=False)
                entries = data.get("entries", []) if data else []
                for entry in entries:
                    if not entry:
                        continue
                    title = entry.get("title") or ""
                    url = entry.get("url") or entry.get("webpage_url")
                    if not url:
                        continue
                    if not str(url).startswith("http"):
                        url = f"https://www.youtube.com/watch?v={url}"
                    entry["webpage_url"] = url
                    candidates.append(entry)
            except Exception as e:
                print(f"Falha na busca '{query}': {e}")
                continue

    unique = {}
    for item in candidates:
        url = item.get("webpage_url")
        if url:
            unique[url] = item

    return list(unique.values())


def score_video(video):
    title = normalize_text(video.get("title"))
    text = title

    duration = video.get("duration") or 0
    views = video.get("view_count") or 0

    score = 0.0

    # Pontuacao por tema.
    for kw in VIRAL_KEYWORDS:
        if kw in text:
            score += 10

    # Penaliza temas fracos ou muito longos.
    for kw in NEGATIVE_KEYWORDS:
        if kw in text:
            score -= 30

    # Duracao ideal para videos educativos curtos.
    if isinstance(duration, (int, float)) and duration > 0:
        if 45 <= duration <= 240:
            score += 30
        elif 25 <= duration < 45:
            score += 15
        elif 241 <= duration <= 900:
            score += 10
        else:
            score -= 15
    else:
        # Em extract_flat pode nao vir duracao. Nao penaliza muito.
        score += 5

    # Popularidade, se disponivel.
    if isinstance(views, int) and views > 0:
        score += min(math.log10(max(views, 1)) * 7, 45)

    # Titulo direto costuma performar melhor.
    if 20 <= len(title) <= 90:
        score += 10

    # Bonus para conteudo educativo.
    if any(x in text for x in ["explicad", "simples", "iniciantes", "como", "por que", "o que é", "o que e"]):
        score += 20

    return score


def choose_best(candidates):
    scored = []
    for video in candidates:
        try:
            scored.append((score_video(video), video))
        except Exception:
            pass

    scored.sort(key=lambda x: x[0], reverse=True)

    print("\nTop candidatos:")
    for s, v in scored[:10]:
        print(f"{s:.2f} | {v.get('title')} | {v.get('webpage_url')}")

    if not scored:
        raise RuntimeError("Nenhum candidato valido encontrado.")

    return scored[0][1], scored[0][0]


# =========================
# DOWNLOAD E EDICAO
# =========================

def download_video(video):
    title = sanitize_filename(video.get("title") or "video_economia")
    outtmpl = str(DOWNLOAD_DIR / f"{title}.%(ext)s")
    url = video.get("webpage_url") or video.get("url")

    ydl_opts = {
        "format": "bv*[height<=1080]+ba/b[height<=1080]/best",
        "outtmpl": outtmpl,
        "merge_output_format": "mp4",
        "noplaylist": True,
        "quiet": False,
        "socket_timeout": 30,
        "retries": 3,
        "fragment_retries": 3,
        "cachedir": False,
    }

    if shutil.which("deno"):
        ydl_opts["js_runtimes"] = {"deno": {}}

    with YoutubeDL(ydl_opts) as ydl:
        info = ydl.extract_info(url, download=True)
        filepath = Path(ydl.prepare_filename(info)).with_suffix(".mp4")

    if not filepath.exists():
        files = sorted(DOWNLOAD_DIR.glob("*.mp4"), key=lambda p: p.stat().st_mtime, reverse=True)
        if not files:
            raise RuntimeError("Download terminou, mas nenhum MP4 foi encontrado.")
        filepath = files[0]

    return filepath


def detect_segment(video_path, target_len=60):
    """
    Mantem continuidade:
    - videos curtos: usa quase tudo;
    - videos longos: pega um trecho central, evitando intro e encerramento.
    """
    duration = ffprobe_duration(video_path)

    if duration <= target_len + 10:
        return 0, max(8, duration - 0.5)

    start_min = max(5, duration * 0.10)
    start_max = max(start_min + 1, min(duration * 0.45, duration - target_len - 2))
    start = random.uniform(start_min, start_max)
    return start, target_len


def make_vertical_short(input_path, output_path, start, length):
    """
    Converte para vertical 9:16 mantendo conteudo central e fundo desfocado.
    """
    filter_complex = (
        "[0:v]split=2[bg][fg];"
        "[bg]scale=1080:1920:force_original_aspect_ratio=increase,"
        "crop=1080:1920,boxblur=24:1[bgv];"
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
        str(output_path),
    ]

    run(cmd)


# =========================
# METADADOS E RELATORIO
# =========================

def generate_metadata(video):
    original_title = video.get("title") or "Video de economia"

    title = "Por que seu dinheiro parece valer menos?"

    description = (
        "Uma explicacao simples sobre economia, dinheiro, poder de compra, juros "
        "e como isso afeta a vida real."
    )

    hashtags = [
        "#Economia", "#Dinheiro", "#EducacaoFinanceira", "#Financas",
        "#Inflacao", "#Juros", "#Selic", "#Investimentos",
        "#Bitcoin", "#MercadoFinanceiro", "#Shorts", "#TikTokBrasil",
        "#ReelsBrasil", "#AprendaNoTikTok"
    ]

    thumbnail = (
        "Pessoa olhando precos no mercado, grafico subindo ao fundo, dinheiro perdendo valor "
        "e texto grande: 'SEU DINHEIRO VALE MENOS?'"
    )

    opening_caption = "Voce ja percebeu que tudo sobe, menos o seu salario?"

    central_question = "Por que o dinheiro perde poder de compra ao longo do tempo?"
    learning_theme = "Inflacao, poder de compra e impacto no dia a dia."
    main_lesson = "Economia afeta mercado, salario, compras, dividas e investimentos."

    return {
        "original_title": original_title,
        "title": title,
        "description": description,
        "hashtags": hashtags,
        "thumbnail": thumbnail,
        "opening_caption": opening_caption,
        "central_question": central_question,
        "learning_theme": learning_theme,
        "main_lesson": main_lesson,
    }


def write_report(video, score, downloaded_path, final_path, metadata):
    now = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    report_path = REPORT_DIR / f"relatorio_economia_auto_shorts_{now}.txt"

    chosen_title = video.get("title") or "Sem titulo"
    chosen_url = video.get("webpage_url") or video.get("url") or "URL nao encontrada"

    reason = (
        f"Escolhido automaticamente por pontuacao ({score:.2f}). "
        "O video tem relacao com economia, aprendizado, dinheiro, inflacao, juros, "
        "educacao financeira ou mercado, e parece ter potencial para formato curto."
    )

    content = f"""RELATORIO ECONOMIA AUTO SHORTS

REGRAS USADAS:
{CONTENT_RULES}

1. Video escolhido:
{chosen_title}
{chosen_url}

2. Motivo da escolha:
{reason}

3. Tema de aprendizado:
{metadata["learning_theme"]}

4. Pergunta central:
{metadata["central_question"]}

5. Licao principal:
{metadata["main_lesson"]}

6. Caminho do arquivo baixado:
{downloaded_path}

7. Caminho do video final:
{final_path}

8. Titulo para TikTok:
{metadata["title"]}

9. Titulo para YouTube Shorts:
{metadata["title"]}

10. Descricao:
{metadata["description"]}

11. Hashtags:
{" ".join(metadata["hashtags"])}

12. Comentario fixado:
Voce sente que seu dinheiro compra menos hoje do que antes?

13. Ideia de thumbnail:
{metadata["thumbnail"]}

14. Legenda de abertura:
{metadata["opening_caption"]}

OBSERVACAO:
Revise direitos de uso do video antes de publicar.
"""

    report_path.write_text(content, encoding="utf-8")
    return report_path


# =========================
# EXECUCAO PRINCIPAL
# =========================

def main():
    check_dependencies()

    print("Iniciando busca automatica de videos sobre economia...")
    candidates = search_videos()

    print(f"\nTotal de candidatos encontrados: {len(candidates)}")
    best, score = choose_best(candidates)

    print("\nVideo escolhido:")
    print(best.get("title"))
    print(best.get("webpage_url"))

    downloaded = download_video(best)
    print(f"\nArquivo baixado: {downloaded}")

    start, length = detect_segment(downloaded, target_len=60)

    final_name = f"economia_short_{datetime.now().strftime('%Y%m%d_%H%M%S')}.mp4"
    final_path = OUTPUT_DIR / final_name

    print(f"\nCortando trecho com continuidade: inicio={start:.2f}s duracao={length:.2f}s")
    make_vertical_short(downloaded, final_path, start, length)

    metadata = generate_metadata(best)
    report_path = write_report(best, score, downloaded, final_path, metadata)

    print("\nProcesso concluido.")
    print(f"Video final: {final_path}")
    print(f"Relatorio: {report_path}")


if __name__ == "__main__":
    main()
