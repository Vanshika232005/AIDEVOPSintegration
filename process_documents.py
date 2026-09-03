import json
from pathlib import Path
from pypdf import PdfReader


KB_DIR = Path("knowledge_base")
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


def process_pdf(pdf_path):
    print(f"Reading: {pdf_path}")

    reader = PdfReader(pdf_path)

    pdf_chunks = []

    for page_number, page in enumerate(reader.pages, start=1):

        text = page.extract_text() or ""

        chunks = chunk_text(text)

        for chunk_number, chunk in enumerate(chunks, start=1):

            pdf_chunks.append({
                "id": f"{pdf_path.stem}_page_{page_number}_chunk_{chunk_number}",
                "source": pdf_path.name,
                "page": page_number,
                "chunk": chunk
            })

    print(f"  Pages: {len(reader.pages)}")
    print(f"  Chunks: {len(pdf_chunks)}")

    return pdf_chunks


def process_all_pdfs():

    pdf_files = sorted(KB_DIR.glob("*.pdf"))

    if not pdf_files:
        print("No PDF files found in knowledge_base/")
        return

    all_chunks = []

    print(f"Found {len(pdf_files)} PDF file(s).")
    print()

    for pdf_path in pdf_files:
        chunks = process_pdf(pdf_path)
        all_chunks.extend(chunks)
        print()

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
        json.dump(
            all_chunks,
            f,
            indent=2,
            ensure_ascii=False
        )

    print("Processing complete.")
    print(f"Total PDFs processed: {len(pdf_files)}")
    print(f"Total chunks created: {len(all_chunks)}")
    print(f"Saved to: {OUTPUT_PATH}")


if __name__ == "__main__":
    process_all_pdfs()
