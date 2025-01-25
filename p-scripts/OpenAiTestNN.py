import openai

API_TOKEN = open("ApiKeyOpenAI.txt").read().strip()
openai.api_key = API_TOKEN


# print(openai.api_key)

# Накидать вариант странички в Figma.
# Накидать простой сервачок, где будем хранить API-ключ.
# Написать обёртку попытки использования собственного API-ключа через try.
# В противном случае используем g4f
# В g4f исплользуем перебор моделей, начиная с gpt4
# +- Добавить возможность отсылать запрос в телеграмм
# Добавить возможность обращаться по контексту для конкретного пользователя.
# Как вариант вручную собирать предпочтения (память, контекст) конкретного пользователя.
# А потом засовывать их в шаблонное сообщение. По умолчанию предпочения пусты.
# По мере увеличения предпочтения будем иметь в виду, что это уточнения предпочтений
# то есть увеличении конкретики.
# Будем отдавать шаблонное сообщение со словарём о каждом месте в Казани
# Механизмы модерации некорректных ответов (ненужного формата).
def get_open_ai_response(user_input: str, user_role="user", gpt_model="gpt-4o-mini"):
    message = {
        "role": user_role,
        "content": user_input
    }

    response = openai.chat.completions.create(
        messages=[message],
        model=gpt_model
    )

    return response.choices[0].message.content


def chat():
    while True:
        user_input = input("Вы: ")
        if user_input == "exit":
            print("ChatGPT: Пока!")
            break
        response = get_gpt_response(user_input)
        print(f"ChatGPT: {response}")


if __name__ == '__main__':
    chat()
