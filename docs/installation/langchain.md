# LangChain 使用 Stima API 範例

### 安裝 LangChain
```bash
pip install langchain
pip install langchain-openai
```

### 使用 Stima API 範例
```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    openai_api_base="https://api.stima.tech/v1",
    openai_api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxx" # 請換成您的 API Key
)

res = llm.invoke("hello")
print(res.content)

```