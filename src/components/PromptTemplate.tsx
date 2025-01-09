import React from 'react';
import { Copy } from 'lucide-react';

const promptTemplate = `我想紀錄一個使用者旅程地圖，請根據以下問題協助我生成對應的表單內容：

---
**基本資訊**
1. 作者名稱（選填）：  
2. 使用者類型（例如：新手用戶、資深用戶）：  
3. 情境描述（例如：首次使用產品、遇到問題時）：  
4. 使用者的目標（例如：完成特定任務、解決問題）：  

---
**旅程步驟**
**Step 1: 觸發事件**
1. 使用者行為：  
2. 描述（該事件的具體情況）：  
3. 系統/產品回應：  
4. 痛點或機會（使用者面臨的挑戰或可改善的地方）：  
5. 情緒指數（1-10，數字即可）：  
6. 情緒描述（使用者當下的心情）：  

**Step 2: 初始互動**
1. 使用者行為：  
2. 描述：  
3. 系統/產品回應：  
4. 痛點或機會：  
5. 情緒指數（1-10）：  
6. 情緒描述：  

**Step 3: 建立信任**
1. 使用者行為：  
2. 描述：  
3. 系統/產品回應：  
4. 痛點或機會：  
5. 情緒指數（1-10）：  
6. 情緒描述：  

**Step 4: 轉折點**
1. 使用者行為：  
2. 描述：  
3. 系統/產品回應：  
4. 痛點或機會：  
5. 情緒指數（1-10）：  
6. 情緒描述：  

**Step 5: 結論**
1. 使用者行為：  
2. 描述：  
3. 系統/產品回應：  
4. 痛點或機會：  
5. 情緒指數（1-10）：  
6. 情緒描述：  

**Step 6: 後續影響**
1. 使用者行為：  
2. 描述：  
3. 系統/產品回應：  
4. 痛點或機會：  
5. 情緒指數（1-10）：  
6. 情緒描述：  

---
請根據我的回答總結並生成一份完整的表單內容，讓我能直接填寫到系統中。`;

export function PromptTemplate() {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(promptTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Prompt 模板</h3>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-100"
        >
          <Copy className="w-4 h-4" />
          {copied ? '已複製！' : '複製全文'}
        </button>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg">
        <pre className="text-sm text-gray-700 whitespace-pre-wrap">{promptTemplate}</pre>
      </div>
    </div>
  );
}