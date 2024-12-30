# LlamaIndex
### Installing LlamaIndex
```bash
pip install llama-index
```
### Using Stima API

Please obtain your API Key from [**Stima API Key**](https://api.stima.tech/token)

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    model="gpt-4o",
    api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", # Please replace with your API Key
    api_base="https://api.stima.tech/v1")
ret=llm.complete("Donald Trump is ")
print(ret)
``` 