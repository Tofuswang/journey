{/* 將圖標顏色改為綠色 */}
import React from 'react';
import { MessageCircle, Copy, Upload, Share2, Download } from 'lucide-react';

export function HowToStart() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">如何開始</h2>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {[
          {
            icon: <MessageCircle className="w-8 h-8 text-emerald-600" />,
            title: "回憶並整理經歷",
            description: "想一想你想要分享的使用者體驗，可以是產品使用、服務體驗或是生活經歷。"
          },
          {
            icon: <Copy className="w-8 h-8 text-emerald-600" />,
            title: "與 ChatGPT 對話",
            description: "使用建議的 GPT Prompt 與 ChatGPT 進行自然對話，幫助理清思路並結構化你的故事內容。"
          },
          {
            icon: <Upload className="w-8 h-8 text-emerald-600" />,
            title: "複製並總結內容",
            description: "將 ChatGPT 生成的結構化內容複製到表單，並按照六個關鍵階段進行調整和補充。"
          },
          {
            icon: <Share2 className="w-8 h-8 text-emerald-600" />,
            title: "提交旅程地圖",
            description: "確認表單內容完整後，點擊「提交旅程地圖」，即可將你的經歷加入我們的資料庫。"
          },
          {
            icon: <Download className="w-8 h-8 text-emerald-600" />,
            title: "下載並分享",
            description: "下載生成的 CSV 文件，或與朋友分享這段經歷，幫助更多人了解使用者體驗。"
          }
        ].map((step, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{index + 1}. {step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-600 text-center">
        開始使用這個工具，你不僅能更好地整理自己的體驗，還能為其他人提供寶貴的參考！如果有任何疑問，歡迎聯繫 Tofus(<a href="mailto:terry.f.wang@gmail.com" className="text-emerald-600 hover:text-emerald-700">terry.f.wang@gmail.com</a>)。
      </p>
    </div>
  );
}