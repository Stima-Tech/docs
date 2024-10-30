# LangChain

### 安裝 LangChain
```bash
pip install langchain
pip install langchain-openai
```

### 使用 Stima API 範例

請至 [**Stima API Key**](https://api.stima.tech/token) 取得您的 API Key

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    openai_api_base="https://api.stima.tech/v1",
    openai_api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxx" # 請換成您的 API Key
)

res = llm.invoke("hello")
print(res.content)

```