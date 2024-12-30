# LangChain

### Installing LangChain
```bash
pip install langchain
pip install langchain-openai
```

### Stima API Usage Example

Please obtain your API Key from [**Stima API Key**](https://api.stima.tech/token)

```python
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(
    openai_api_base="https://api.stima.tech/v1",
    openai_api_key="sk-xxxxxxxxxxxxxxxxxxxxxxxx" # Please replace with your API Key
)

res = llm.invoke("hello")
print(res.content)

``` 