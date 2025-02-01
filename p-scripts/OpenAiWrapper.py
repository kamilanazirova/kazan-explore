from g4f.client import Client
from typing import Union
import json
from OpenAiTestNN import get_open_ai_response

def _get_gpt_response(**kwargs) -> str:
    """ Получение ответа от GPT """
    try:
        gpt_answer = kwargs["gpt_ask_client"].chat.completions.create(
            model=kwargs["gpt_model"],
            messages=[{"role": kwargs["user_role"], "content": kwargs["content"]}]
        )
        return gpt_answer.choices[0].message.content
    except Exception as e:
        return f"Ошибка при запросе к GPT: {str(e)}"

def ask_gpt_for_a_response(user_input: Union[list[str], str],
                           gpt_models: Union[list[str], str],
                           user_role: str = "user") -> dict:
    """ Основная функция запроса к GPT """
    gpt_ask_client = Client()

    if isinstance(gpt_models, str):
        gpt_model = gpt_models
    else:
        return {"error": "gpt_models должен быть строкой (название модели GPT)."}

    try:
        res = get_open_ai_response()
    except Exception:
        res = _get_gpt_response(
            gpt_ask_client=gpt_ask_client,
            gpt_model=gpt_model,
            user_role=user_role,
            content=user_input
        )

    # Формируем JSON-ответ
    return {"response": res}

# 🚀 Тестовый вызов
if __name__ == "__main__":
    user_input = "Что такое хорда в математике?"
    model = "gpt-4o-mini"
    response = ask_gpt_for_a_response(user_input, model)
    print(json.dumps(response, ensure_ascii=False, indent=4))  # Красивый вывод JSON
