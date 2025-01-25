from g4f.client import Client
from typing import Union
from OpenAiTestNN import get_open_ai_response


def _iterate_over_the_list(lst: list):
    for elem in lst:
        yield elem


def _get_gpt_response(**kwargs):
    gpt_answer = kwargs["gpt_ask_client"].chat.completions.create(
        model=kwargs["gpt_model"],
        messages=[{"role": kwargs["user_role"],
                   "content": kwargs["content"]}]
    )
    return gpt_answer.choices[0].message.content


def ask_gpt_for_a_response(user_input: Union[list[str], str],
                           gpt_models: Union[list[str], str],
                           user_role: str = "user",
                           context: list[str] = None):
    gpt_ask_client = Client()
    content = user_input
    if isinstance(gpt_models, str):
        gpt_model = gpt_models
    elif isinstance(gpt_models, list):
        ...
        # yield - функция-итератор по списку
    else:
        raise TypeError("Incorrect input of gpt_models, it must be type of string or list of strings!")

    # список трёх реализаций (openai, gpt, tg)
    try:
        res = get_open_ai_response()
    except:
        res = _get_gpt_response(gpt_ask_client=gpt_ask_client,
                                gpt_model=gpt_model,
                                user_role=user_role,
                                content=content)
    '''response = gpt_ask_client.chat.completions.create(
        model=gpt_model,
        messages=[{"role": user_role, "content": content}]
    )'''

    return res


tmp_list = ['123', 2, 435, '54545', True]

tmp_iterator = _iterate_over_the_list(tmp_list)
for elem in tmp_iterator:
    print(elem)

# gpt-3.5-turbo, gpt-4o-mini
print(ask_gpt_for_a_response("Привет! Подскажи, пожалуйста, что такое хорда в матетематике?",
                            "gpt-4o-mini"))
