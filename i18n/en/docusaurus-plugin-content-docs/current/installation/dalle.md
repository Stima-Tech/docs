# Using DALL-E

## Python Example

```python
from openai import OpenAI
key = '<STIMA_API_KEY>' # Your Stima API Key
client = OpenAI(
    base_url="https://api.stima.tech/v1",
    api_key=key
)

response = client.images.generate(
  model="dall-e-3",
  prompt="a white siamese cat",
  size="1024x1024",
  quality="standard",
  n=1,
)

image_url = response.data[0].url
print(image_url)
```

## Parameters

- `model`: The model to use, currently supports `dall-e-3`
- `size`: The size of the image, currently supports `1024x1024`, `1792x1024`, `1024x1792`
- `quality`: The quality of the image, currently supports `standard`, `hd`
- `STIMA_API_KEY`: Your API key

