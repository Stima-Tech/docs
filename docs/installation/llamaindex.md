# LlamaIndex
### 安裝 LlamaIndex
```bash
pip install llama-index
```
### 使用 Stima API

請至 [**Stima API Key**](https://api.stima.tech/token) 取得您的 API Key

```python
from llama_index.llms.openai import OpenAI

llm = OpenAI(
    model="gpt-4o",
    api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", # 請填入您的 API Key
    api_base="https://api.stima.tech/v1")
ret=llm.complete("Donald Trump is ")
print(ret)
```