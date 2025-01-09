{/* 將連結顏色改為綠色 */}
import React from 'react';

interface FooterProps {
  onShowLegal: (page: 'terms' | 'privacy' | 'disclaimer') => void;
}

export function Footer({ onShowLegal }: FooterProps) {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-6">
          <button 
            onClick={() => onShowLegal('terms')}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            使用守則
          </button>
          <button 
            onClick={() => onShowLegal('privacy')}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            隱私政策
          </button>
          <button 
            onClick={() => onShowLegal('disclaimer')}
            className="text-gray-600 hover:text-emerald-600 transition-colors"
          >
            免責聲明
          </button>
        </div>
        
        <div className="text-center text-gray-600 text-sm">
          <p>© {new Date().getFullYear()} 使用者旅程地圖 - 分享你的使用者體驗</p>
          <p className="mt-2">
            開發者 Tofus | <a href="mailto:terry.f.wang@gmail.com" className="text-emerald-600 hover:text-emerald-700">terry.f.wang@gmail.com</a>
          </p>
          <p className="mt-2">
            本網站內容採用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">CC-BY 4.0 授權條款</a>
          </p>
        </div>
      </div>
    </footer>
  );
}