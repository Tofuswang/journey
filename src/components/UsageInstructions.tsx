import React from 'react';
import { PromptTemplate } from './PromptTemplate';

export function UsageInstructions() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">
        使用說明：如何紀錄使用者旅程地圖
      </h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">1. 進行對話</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>先與 ChatGPT（或其他大語言模型）進行自然對話，描述你想要分享的使用者體驗。</li>
            <li>在對話過程中，嘗試回憶每個關鍵步驟，並大致了解哪些資訊可以填寫到旅程地圖中。</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">2. 總結對話</h4>
          <p className="text-gray-600 mb-3">當你覺得描述得差不多時，使用以下 Prompt 模板，將對話內容結構化總結：</p>
          <PromptTemplate />
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">3. 輸入表單</h4>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>使用 GPT 輸出的結果，逐步將總結內容填入表單。</li>
            <li>確保每個欄位的內容完整且清晰，以便進行後續分析或使用。</li>
          </ul>
        </div>
      </div>
    </div>
  );
}