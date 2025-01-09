{/* 將所有 amber 相關的顏色改為 emerald */}
import React from 'react';
import { Map, Heart, Brain, Target, Users, ArrowLeft, Share2, Code, Mail, Github, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface AboutPageProps {
  onClose: () => void;
}

export function AboutPage({ onClose }: AboutPageProps) {
  const [journeyCount, setJourneyCount] = React.useState<number>(0);

  React.useEffect(() => {
    async function fetchCount() {
      const { count } = await supabase
        .from('journey_maps')
        .select('*', { count: 'exact', head: true });
      setJourneyCount(count || 0);
    }
    fetchCount();
  }, []);

  return (
    <div className="max-w-3xl mx-auto py-4 px-4 md:py-8">
      <div className="flex items-center mb-4">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          返回首頁
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="flex items-center gap-3 mb-6">
          <Map className="w-8 h-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-gray-900">關於這個專案</h2>
        </div>

        <div className="prose max-w-none">
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Target className="w-6 h-6 text-emerald-600" />
              專案目標
            </h3>
            <p className="text-gray-600">
              這個專案旨在透過結構化的方式記錄和分析使用者體驗，幫助更多人了解不同情境下的使用者行為和情緒變化。我們相信，透過開放和分享這些經驗，能夠幫助改善產品和服務設計。
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-emerald-600" />
              核心理念
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-2">
                <Share2 className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>開放資料分享：</strong>
                  所有案例資料採用 CC-BY 4.0 授權，鼓勵設計師、研究者和相關單位使用這些資料進行研究和改善。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>社群協作：</strong>
                  目前已收集 {journeyCount} 個案例，透過群眾智慧持續累積和更新使用者體驗的資料庫。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-5 h-5 text-emerald-600 mt-1 flex-shrink-0" />
                <span>
                  <strong>同理心設計：</strong>
                  從使用者的角度出發，記錄每個階段的情緒變化，幫助更多人理解使用者體驗的重要性。
                </span>
              </li>
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-4">
              <Code className="w-6 h-6 text-emerald-600" />
              開發者資訊
            </h3>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Hi，我是 Tofus！我是一名正在休學中的大學生！平常喜歡在 <a href="https://g0v.tw" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-700">g0v 零時政府</a> 設計一些小東西，之前有在台大當過設計工讀生。這個專案源於我對使用者體驗以及服務設計的熱情。如果你有任何建議或想法，歡迎聯繫我：
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:terry.f.wang@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  terry.f.wang@gmail.com
                </a>
                <a
                  href="https://github.com/Tofuswang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  github.com/Tofuswang
                </a>
                <a
                  href="https://www.instagram.com/0xtofus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 hover:bg-pink-200 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  instagram.com/0xtofus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}