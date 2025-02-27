# Embeddings

```json
/v1/embeddings
```

## HTTP Request

Stima API provides an Embedding API that allows developers to convert text into vectors and find similar text through vector search.

**Currently supports `text-embedding-3-large`, `text-embedding-3-small`, `text-embedding-ada-002`.**

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

- `<MODEL_ALIAS>`: The alias of the model to use
- `<INPUT>`: The text to convert to a vector
- `<STIMA_API_KEY>`: Your API key
