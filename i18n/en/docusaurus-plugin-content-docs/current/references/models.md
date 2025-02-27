# Models
```json
/v1/models
```

## List all models

Returns all available models, including model names, model descriptions, and model parameters.

### HTTP Request

```bash
curl https://api.stima.tech/v1/models \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer <STIMA_API_KEY>"
```

- `<STIMA_API_KEY>`: Your API key

### Response

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