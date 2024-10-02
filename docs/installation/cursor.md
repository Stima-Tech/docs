# Cursor IDE

Cursor IDE 是一個基於瀏覽器的 IDE，可以讓您在瀏覽器中編寫、編輯和運行代碼。

## Cursor IDE 安裝

### 下載

請先至 **[Cursor IDE 官網](https://www.cursor.com/)**，並點擊右上角的下載，即可下載 Cursor IDE。

![image](https://hackmd.io/_uploads/SJH2WxDoC.jpg)

### 安裝

雙擊安裝檔即出現下方的畫面。

![image](https://hackmd.io/_uploads/SkH32oP50.png)

- **Language for AI**: AI 模型在回覆時會自動翻譯成您選擇的語言。如需使用繁體中文，請輸入`Traditional Chinese`。
- **Codebase-wide**: 您可以選擇讓Cursor對您的整個程式碼進行嵌入（embedding）並加入 RAG。這樣做的好處是可以進行向量查找，未來在編輯程式或讓AI進行編寫或改寫時，AI可以參考這些內容，從而更好地輔助您的工作。
- **Add to Command Line**: 建議點選右側的`install cursor`，這樣您就可以直接在命令行（CMD）中呼叫 Cursor，進而提升工作效率。

### 繼承自 VSCode 擴充套件

若您之前使用 VSCode 進行開發，並安裝了擴充套件（如 Jupyter Notebook, Prettier 等），可以直接將這些擴充套件匯入 Cursor IDE，無需逐個重新安裝。只需點擊【Use Extensions】按鈕即可完成套件匯入。

![image](https://hackmd.io/_uploads/HJOOAswq0.png)

若您之前在 VSCode 中安裝過 `Continue` 開發助手，系統會詢問您是繼續使用 `Continue` 還是轉用 Cursor 的 AI 擴充套件。建議選擇使用 Cursor 的 AI 擴充套件，以獲得更佳的開發體驗。

![image](https://hackmd.io/_uploads/rJHfJhDcC.png)

## 使用 Stima API 模型

### 設定 API Key

您可以將 **Stima API** 整合到 **Cursor** 中，使用 Stima API 的模型。

1. 首先，選擇【Models】選項。

![image](https://hackmd.io/_uploads/BkDbZNqcC.png)

請前往下方的【OpenAI API Key】欄位，輸入您的 API Key。打開【Override OpenAI Base URL】選項，並輸入以下 API 呼叫之網址：`https://api.stima.tech/v1` 。最後，點擊右上角的Verify按鈕。若沒有出現任何錯誤提示，則表示已成功完成設定。

![image](https://hackmd.io/_uploads/SJVqOgviA.png)

在第二步設置模型時，只需選擇相應的模型名稱即可。

![image](https://hackmd.io/_uploads/r16AuxPoA.png)

### 選擇模型

接下來，請參考[模型支援列表](https://api.stima.tech/)，並點擊下方的【Add model】按鈕。之後，輸入模型名稱，請注意這裡必須與我們提供的**模型呼叫別名**相同，否則無法使用對應之模型。例如：

- 欲使用**Claude 3.5 Sonnet**，請輸入 `cow-3-5-sonnet-20240620`
- 欲使用**GPT-4o**，請輸入 `gpt-4o`
- 欲使用**Gemini 1.5 Pro**，請輸入 `gemini-1.5-pro-latest`

特別注意，為使用 Stima API 的 Claude 模型，必須將 Claude 模型的名稱改為我們提供的模型別名。例如，使用 `cow-3-5-sonnet-20240620` 替代 `claude-3-5-sonnet-20240620`。

![image](https://hackmd.io/_uploads/H1g9N9Po0.png)

![image](https://hackmd.io/_uploads/H1g9N9Po0.png)

接著，至聊天界面，即可見新增的模型，代表可以正常使用。

![image](https://hackmd.io/_uploads/rJtJr9DsR.png)
