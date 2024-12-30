# Chatbox AI

Chatbox AI is a graphical chat interface that excels in **using API Keys for UI-based chat**. When using dialogue interfaces through OpenAI or Claude's official websites, users are **forced to pay subscription fees and face traffic limits**. Alternatively, purchasing API Keys requires programming knowledge for API calls and additional development of graphical interfaces, which isn't user-friendly. Therefore, **Chatbox AI** allows users to chat with **60+ models through Stima API** in a familiar way, with the ability to **switch between different models with one click**, making it convenient to choose suitable models for specific tasks.

### Download and Installation

Visit the **[Chatbox AI Official Website](https://chatboxai.app/en)** and choose the download version according to your computer system. Chatbox AI also provides mobile versions (Android, iOS).

![image](https://hackmd.io/_uploads/HkP8MSc9A.png)

### Setting up API Key

Click the settings icon in the bottom left corner to access the [Model Settings screen]. Under [Model Provider], select `Add Custom Provider`. Then, for `API Mode`, choose `OpenAI API Compatible` since we provide OpenAI API-compatible model call formats.

Enter your API Key in the [API Key] field and input `https://api.stima.tech` in the [API Domain] field, then select your desired model. After selection, you can fine-tune some values (such as `temperature`, `Top P`, etc.) and click save to start using the model.

![image](https://hackmd.io/_uploads/S1JVicdoR.png)

![image](https://hackmd.io/_uploads/SyjvocOiR.png)

Please fill in the corresponding values according to our provided models. For example, to use **Claude 3.5 Sonnet**, enter:

* **API Mode**: OpenAI API Compatible
* **Name**: Any name (for easy identification of Claude 3.5 Sonnet)
* **API Domain**: `https://api.stima.tech`
* **API Path**: Leave unchanged
* **API Key**: Your API Key
* **Model**: `claude-3-5-sonnet-20240620`

![image](https://hackmd.io/_uploads/SkLh2qOoR.png)

After saving, select the model you just set up to start using it.

![image](https://hackmd.io/_uploads/HJeAh9_i0.png) 