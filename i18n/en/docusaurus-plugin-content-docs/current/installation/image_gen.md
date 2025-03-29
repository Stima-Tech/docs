# Using Image Generation API

Stima API provides Image Generation API for developers to generate images, primarily focusing on `GPT-4o Image Generation` and `Gemini 2.0 Flash Expanded Image Generation`.

## Usage (Python Example)

```python
import requests
import json

url = "https://api.stima.tech/v1/chat/completions"

payload = json.dumps({
   "max_tokens": 4096,
   "model": "<MODEL_ALIAS>",
   "messages": [
      {
         "role": "user",
         "content": [
            {
               "type": "text",
               "text": "Transform the image into Ghibli style"
            },
            {
               "type": "image_url",
               "image_url": {
                  "url": "data:image/png;base64,"
               }
            }
         ]
      }
   ]
})
headers = {
   'Accept': 'application/json',
   'Authorization': 'Bearer <STIMA_API_KEY>',
   'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

## Usage (bash Example)

```bash
curl -X POST "https://api.stima.tech/v1/chat/completions" \
  -H "Accept: application/json" \
  -H "Authorization: Bearer <STIMA_API_KEY>" \
  -H "Content-Type: application/json" \
  -d '{"model": "<MODEL_ALIAS>", "messages": [{"role": "user", "content": [{"type": "text", "text": "Transform the image into Ghibli style"}, {"type": "image_url", "image_url": {"url": "data:image/png;base64,"}}]}
```

## Parameter Description

- `model`: Currently supports `gpt-4o-image` and `gemini-2.0-flash-exp-image-generation`.
- `prompt`: Description of the image to be generated.
- `STIMA_API_KEY`: Your API key.
- Allowed Image Input: Convert to **base64** format. 