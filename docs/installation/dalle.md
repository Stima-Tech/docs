# 使用 DALL-E API

## 以 Python 為例

```python
from openai import OpenAI
key = '<STIMA_API_KEY>' 
client = OpenAI(
    base_url="https://api.stima.tech/v1",
    api_key=key
)

response = client.images.generate(
  model="<MODEL>",
  prompt="a white siamese cat",
  size="1024x1024",
  quality="standard",
  n=1,
)

image_url = response.data[0].url
print(image_url)
```

## 參數說明

- `<MODEL>`: 要使用的模型，目前僅支援 `dall-e-3`。
- `size`: 圖片大小，目前僅支援 `1024x1024`, `1792x1024`, `1024x1792`。
- `quality`: 圖片品質，目前僅支援 `standard`, `hd`。
- `STIMA_API_KEY`: 您的 API 金鑰