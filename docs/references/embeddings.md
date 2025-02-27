# Embeddings
```json
/v1/embeddings
```

Stima API 提供 Embedding API 讓開發者可以將文字轉換為向量，並且可以透過向量搜尋的方式找到相似的文字。

**目前支援 `text-embedding-3-large`, `text-embedding-3-small`, `text-embedding-ada-002`。**

## 使用方式 (以 Python 為例)

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.stima.tech")
payload = json.dumps({
   "model": "<MODEL_ALIAS>",
   "input": "<INPUT>"
})
headers = {
   'Authorization': 'Bearer <STIMA_API_KEY>',
   'Content-Type': 'application/json'
}
conn.request("POST", "/v1/embeddings", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

- `<MODEL_ALIAS>`: 要使用的模型，目前支援 `text-embedding-3-large`, `text-embedding-3-small`, `text-embedding-ada-002`
- `<INPUT>`: 要轉換的文字
- `<STIMA_API_KEY>`: 您的 API 金鑰

