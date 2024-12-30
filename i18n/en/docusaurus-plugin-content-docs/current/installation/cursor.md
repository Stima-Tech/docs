# Cursor IDE

Cursor IDE is an enhanced AI-driven code editor. It is a fork of Visual Studio Code that brings advanced AI capabilities to the familiar interface. **Cursor IDE** deeply integrates with your development workflow, going beyond just suggesting code or handling repetitive tasks. This tool actually understands your project. It comprehends your coding style, knows your project structure, and can even learn your team's best practices. It's like having a **Junior Software Engineer** partner by your side, offering suggestions, catching errors, and even helping you refactor code—all in real-time.

## Cursor IDE Installation

### Download

First, visit the **[Cursor IDE official website](https://www.cursor.com/)** and click the download button in the top right corner to download Cursor IDE.

![image](https://hackmd.io/_uploads/SJH2WxDoC.jpg)

### Installation

Double-click the installation file to see the following screen.

![image](https://hackmd.io/_uploads/SkH32oP50.png)

- **Language for AI**: The AI model will automatically translate responses into your chosen language. To use Traditional Chinese, enter `Traditional Chinese`.
- **Codebase-wide**: You can choose to let Cursor embed your entire codebase and add RAG. This enables vector search, allowing AI to reference these contents for better assistance when editing or writing code in the future.
- **Add to Command Line**: It's recommended to click `install cursor` on the right, which allows you to call Cursor directly from the command line (CMD), improving work efficiency.

### Inheriting VSCode Extensions

If you previously used VSCode for development and installed extensions (such as Jupyter Notebook, Prettier, etc.), you can directly import these extensions into Cursor IDE without reinstalling them individually. Simply click the 【Use Extensions】 button to complete the import.

![image](https://hackmd.io/_uploads/HJOOAswq0.png)

If you previously installed the `Continue` development assistant in VSCode, the system will ask whether you want to continue using `Continue` or switch to Cursor's AI extension. It's recommended to choose Cursor's AI extension for a better development experience.

![image](https://hackmd.io/_uploads/rJHfJhDcC.png)

## Using Stima API Models

### Setting up API Key

You can integrate **Stima API** into **Cursor** to use Stima API models.

1. First, select the 【Models】 option.

![image](https://hackmd.io/_uploads/BkDbZNqcC.png)

Go to the 【OpenAI API Key】 field and enter your API Key. Enable the 【Override OpenAI Base URL】 option and enter the following API call URL: `https://api.stima.tech/v1`. Finally, click the Verify button in the top right corner. If no error message appears, the setup is successful.

![image](https://hackmd.io/_uploads/SJVqOgviA.png)

When setting up models in the second step, simply select the corresponding model name.

![image](https://hackmd.io/_uploads/r16AuxPoA.png)

### Choosing Models

Next, refer to the [Model Support List](https://api.stima.tech/) and click the 【Add model】 button below. Then, enter the model name, making sure it matches our provided **model call alias** exactly, otherwise the corresponding model cannot be used. For example:

- To use **Claude 3.5 Sonnet**, enter `cow-3-5-sonnet-20240620`
- To use **GPT-4o**, enter `gpt-4o`
- To use **Gemini 1.5 Pro**, enter `gemini-1.5-pro-latest`

Note specifically that to use Stima API's Claude models, you must change the Claude model name to our provided model alias. For example, use `cow-3-5-sonnet-20240620` instead of `claude-3-5-sonnet-20240620`.

![image](https://hackmd.io/_uploads/H1g9N9Po0.png)

![image](https://hackmd.io/_uploads/H1g9N9Po0.png)

Then, go to the chat interface where you can see the added model, indicating it's ready for use.

![image](https://hackmd.io/_uploads/rJtJr9DsR.png) 