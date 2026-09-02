import json
from pathlib import Path
from pypdf import PdfReader


PDF_PATH = Path("knowledge_base/UIAI_1.pdf")
OUTPUT_PATH = Path("data/chunks.json")

CHUNK_SIZE = 1000
CHUNK_OVERLAP = 200


def chunk_text(text, chunk_size=CHUNK_SIZE, overlap=CHUNK_OVERLAP):
    text = " ".join(text.split())

    if not text:
        return []

    chunks = []

    start = 0

    while start < len(text):
        end = start + chunk_size

        chunk = text[start:end].strip()

        if chunk:
            chunks.append(chunk)

        if end >= len(text):
            break

        start = end - overlap

    return chunks


def process_pdf():
    print(f"Reading: {PDF_PATH}")

    reader = PdfReader(PDF_PATH)

    all_chunks = []

    for page_number, page in enumerate(reader.pages, start=1):

        text = page.extract_text() or ""

        chunks = chunk_text(text)

        for chunk_number, chunk in enumerate(chunks, start=1):

            all_chunks.append({
                "id": f"page_{page_number}_chunk_{chunk_number}",
                "source": PDF_PATH.name,
                "page": page_number,
                "chunk": chunk
            })

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(all_chunks, f, indent=2, ensure_ascii=False)

    print()
    print("Processing complete.")
    print(f"Pages processed: {len(reader.pages)}")
    print(f"Chunks created: {len(all_chunks)}")
    print(f"Saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    process_pdf()
