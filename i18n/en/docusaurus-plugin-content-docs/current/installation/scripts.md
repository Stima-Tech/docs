# Python and cURL API Usage Examples

### Python

Stima API provides **OpenAI Compatible APIs**, so you can use the `OpenAI` package in `Python` and modify the `model` variable to call all supported models.

```python
key = '<STIMA_API_KEY>' # Please replace with your API Key
from openai import OpenAI

client = OpenAI(
    api_key=key,
    base_url="https://api.stima.tech/v1/"
)

chat_completion = client.chat.completions.create(
    model="<MODEL_ALIAS>", # Modify the model variable to call different models
    messages=[
        {"role": "user", "content": "Hello world"}
    ]
)

print(chat_completion.choices[0].message.content)

```

### cURL

To use `cURL` to call Stima API, you only need to modify the `api_key` and `model` variables to call all supported models.  
Please replace `<STIMA_API_KEY>` and `model` values with your **API Key** and **model alias**.

```bash
curl https://api.stima.tech/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <STIMA_API_KEY>" \
    -d '{
        "model": "<MODEL_ALIAS>",
        "messages": [
            {
                "role": "system",
                "content": "Hello World!"
            }
        ]
    }'

``` 