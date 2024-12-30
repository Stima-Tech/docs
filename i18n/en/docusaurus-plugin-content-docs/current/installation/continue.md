# Continue Dev

[**Continue Dev**](https://www.continue.dev/) is an extension developed for **VSCode** and **Cursor IDE** that simplifies user interactions with large language models like ChatGPT. It allows users to easily import code snippets into large language models for development assistance.

### Introduction

Compared to **Cursor IDE**, both demonstrate **code-centric language model interaction capabilities** and provide **automatic rewriting features**. However, Cursor takes the lead with its greater emphasis on Codebase RAG (Retrieval-Augmented Generation) and significantly superior accuracy in Autocomplete.

Nevertheless, Continue still excels in quick queries to large language models and debugging. As a lightweight extension, Continue Dev offers an alternative option. Whether you need immediate answers, seek code optimization suggestions, or when Cursor IDE encounters issues, Continue Dev can provide excellent assistance.

### Installation

This guide focuses on VSCode installation. First, find the 【Extensions】 icon in the left menu and search for **Continue**.

![](https://hackmd.io/_uploads/HJ_E-najC.jpg)

After installation, you'll see the following screen, but the dialogue box on the left doesn't have functionality yet as it requires additional `config.json` setup.

![](https://hackmd.io/_uploads/SyRkfh6j0.jpg)

### Adding `config.json`

Find the gear icon at the bottom left, clicking it will redirect you to the `config.json` file.

![](https://hackmd.io/_uploads/HkxMqpYM3A.png)

Copy the `json` file below and paste it into `config.json`. The **apiKey** value must be replaced with your **API Key**.

```json
{
"models": [
  {
    "model": "claude-3-5-sonnet-20240620",
    "apiBase": "https://api.stima.tech/v1",
    "title": "Claude 3.5",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  },
  {
    "model": "gpt-4o",
    "apiBase": "https://api.stima.tech/v1",
    "title": "GPT-4o",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  },
  {
    "model": "gpt-4-turbo",
    "apiBase": "https://api.stima.tech/v1",
    "title": "GPT-4-Turbo",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  },
  {
    "model": "gpt-3.5-turbo",
    "apiBase": "https://api.stima.tech/v1",
    "title": "GPT-3.5-Turbo",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  },
  {
    "model": "gemini-1.5-pro-latest",
    "apiBase": "https://api.stima.tech/v1",
    "title": "gemini-1.5-pro-latest",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  },
  {
    "model": "gemini-1.5-flash-latest",
    "apiBase": "https://api.stima.tech/v1",
    "title": "gemini-1.5-flash-latest",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai",
    "description": "Explain in Traditional Chinese"
  }

],
"customCommands": [
  {
    "name": "test",
    "prompt": "{{{ input }}}\n\nWrite a comprehensive set of unit tests for the selected code. It should setup, run tests that check for correctness including important edge cases, and teardown. Ensure that the tests are complete and sophisticated. Give the tests just as chat output, don't edit any file.",
    "description": "Write unit tests for highlighted code"
  }
],
"allowAnonymousTelemetry": true,
"embeddingsProvider": {
  "provider": "free-trial"
},
"tabAutocompleteModel": {
    "model": "gpt-4o",
    "apiBase": "https://api.stima.tech/v1",
    "title": "GPT-4o",
    "apiKey": "sk-xxxxxxxxxxxxxxxxxxxxx",
    "provider": "openai"
  },
"tabAutocompleteOptions": {
    "useCopyBuffer": false,
    "maxPromptTokens": 400,
    "prefixPercentage": 0.5
  },
"reranker": {
  "name": "free-trial"
}
}

```

### Getting Started

**Asking Programming Questions**

- Select a piece of code and press 【Ctrl + L】

![](https://hackmd.io/_uploads/r1zYS2TiR.png)

**Rewriting Code**

- Select a piece of code and press 【Ctrl + I】

![](https://hackmd.io/_uploads/HJozI3aoR.png) 