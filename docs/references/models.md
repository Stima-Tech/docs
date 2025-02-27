# Models
```json
/v1/models
```

## 列出所有模型

回傳所有可用模型，包含模型名稱、模型描述、模型參數等。

### HTTP 請求

```bash
curl https://api.stima.tech/v1/models \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <STIMA_API_KEY>"
```
- STIMA_API_KEY: 您的 API 金鑰

### 回應格式

```json
{
  "data": [
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
    },...
  ],
}
```
