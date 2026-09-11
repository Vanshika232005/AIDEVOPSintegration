import requests


MODEL = "qwen2.5-coder:1.5b"
CHAT_URL = "http://localhost:11434/api/chat"


def ask_llm(question):

    response = requests.post(
        CHAT_URL,
        json={
            "model": MODEL,
            "messages": [
                {
                    "role": "user",
                    "content": question
                }
            ],
            "stream": False,
            "think": False,
            "options": {
                "temperature": 0.2,
                "num_ctx": 1024
            }
        },
        timeout=300
    )

    response.raise_for_status()

    data = response.json()

    return data["message"]["content"]


def main():

    print("=" * 70)
    print("AADHAAR ASSISTANT - WITHOUT RAG")
    print("=" * 70)

    question = input("\nEnter your question: ")

    print("\nGenerating answer directly from Qwen...\n")

    answer = ask_llm(question)

    print("=" * 70)
    print("LLM ANSWER WITHOUT RAG")
    print("=" * 70)

    print(answer)

    print("=" * 70)


if __name__ == "__main__":
    main()
