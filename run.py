import requests


API_URL = "http://localhost:8000/ask"


def ask_question(question):
    try:
        response = requests.post(
            API_URL,
            json={"question": question},
            timeout=300
        )

        response.raise_for_status()

        data = response.json()

        print("\n" + "=" * 70)
        print("ANSWER")
        print("=" * 70)
        print(data["answer"])

        print("\n" + "-" * 70)
        print("SOURCES")
        print("-" * 70)

        for source in data.get("sources", []):
            print(
                f"{source['source']} | "
                f"Page {source['page']} | "
                f"Distance: {source['distance']:.4f}"
            )

        print("=" * 70)

    except requests.exceptions.RequestException as e:
        print(f"\nError connecting to AI service: {e}")


def main():

    print("=" * 70)
    print("        AADHAAR AI ASSISTANT")
    print("=" * 70)
    print("Type your question.")
    print("Type 'exit' or 'quit' to stop.")
    print()

    while True:

        question = input("You: ").strip()

        if question.lower() in ["exit", "quit"]:
            print("\nGoodbye!")
            break

        if not question:
            continue

        print("\nThinking...")

        ask_question(question)


if __name__ == "__main__":
    main()
