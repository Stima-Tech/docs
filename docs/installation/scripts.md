# Python, cURL 使用 API 範例

### Python

Stima API 為 **OpenAI Compatible APIs**，故使用 `Python` 中的 `openai` 套件，並修改 `model` 變數即可呼叫所有支援模型。

```python
key = "<STIMA_API_KEY>" # 請換成您的 API Key
from openai import OpenAI

client = OpenAI(
    api_key=key,
    base_url="https://api.stima.tech/v1/"
)

chat_completion = client.chat.completions.create(
    model="<MODEL_ALIAS>", # 請修改 model 變數以呼叫不同模型
    messages=[
        {"role": "user", "content": "Hello world"}
    ]
)

print(chat_completion.choices[0].message.content)

```

### cURL

使用 `cURL` 呼叫 Stima API，僅需修改 `api_key` 和 `model` 變數即可呼叫所有支援模型。  
請將 `<STIMA_API_KEY>`, `model`數值修改成您的 **API Key** 及 **模型別名**。

```bash
curl https://api.stima.tech/v1/chat/completions \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <STIMA_API_KEY>" \
    -d '{
        "model": "<MODEL_ALIAS>",
        "messages": [
            {
                "role": "system",
                "content": "You are a test assistant."
            }
        ]
    }'

```
