# Embedding API

Stima API provides the Embedding API for developers to convert text into vectors and find similar text through vector search.

## Usage (Example in Python)

```python
import http.client
import json

conn = http.client.HTTPSConnection("api.stima.tech")
payload = json.dumps({
   "model": "text-embedding-3-large",
   "input": "The food was delicious and the waiter..."
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

## Parameters

- `model`: The model to use, currently supports `text-embedding-3-large`, `text-embedding-3-small`, `text-embedding-ada-002`
- `input`: The text to convert
- `STIMA_API_KEY`: Your API key

