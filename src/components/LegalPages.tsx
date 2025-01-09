import React from 'react';
import { ArrowLeft, Scale, Shield, FileText } from 'lucide-react';

interface LegalPageProps {
  onClose: () => void;
}

const PageLayout: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
}> = ({ children, onClose, icon, title }) => (
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
        {icon}
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="prose max-w-none text-gray-600">
        {children}
      </div>
    </div>
  </div>
);

export function Terms({ onClose }: LegalPageProps) {
  return (
    <PageLayout onClose={onClose} icon={<Scale className="w-6 h-6 text-amber-500" />} title="使用守則">
      <h3 className="text-lg font-semibold text-gray-800 mt-6">1. 內容準則</h3>
      <ul>
        <li>分享的內容必須基於真實經歷</li>
        <li>避免使用歧視性、攻擊性或不當的語言</li>
        <li>不得包含廣告或商業推廣內容</li>
        <li>遵守相關法律法規</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">2. 資訊安全</h3>
      <ul>
        <li>不得分享個人識別資訊</li>
        <li>不得揭露他人隱私</li>
        <li>謹慎處理敏感資訊</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">3. 使用規範</h3>
      <ul>
        <li>尊重智慧財產權</li>
        <li>不得濫用或破壞系統</li>
        <li>遵守 CC-BY 4.0 授權條款</li>
      </ul>
    </PageLayout>
  );
}

export function Privacy({ onClose }: LegalPageProps) {
  return (
    <PageLayout onClose={onClose} icon={<Shield className="w-6 h-6 text-amber-500" />} title="隱私政策">
      <h3 className="text-lg font-semibold text-gray-800 mt-6">1. 資料收集</h3>
      <ul>
        <li>我們只收集用戶自願提供的資訊</li>
        <li>不收集個人識別資訊</li>
        <li>所有資料均用於防詐騙研究</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">2. 資料使用</h3>
      <ul>
        <li>資料僅用於研究和教育目的</li>
        <li>不會向第三方出售資料</li>
        <li>可能會發布統計分析結果</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">3. 資料保護</h3>
      <ul>
        <li>採取適當的技術措施保護資料</li>
        <li>定期檢討資料安全措施</li>
        <li>遵守相關隱私保護法規</li>
      </ul>
    </PageLayout>
  );
}

export function Disclaimer({ onClose }: LegalPageProps) {
  return (
    <PageLayout onClose={onClose} icon={<FileText className="w-6 h-6 text-amber-500" />} title="免責聲明">
      <h3 className="text-lg font-semibold text-gray-800 mt-6">1. 內容責任</h3>
      <ul>
        <li>本網站內容僅供參考</li>
        <li>不保證內容的完整性和準確性</li>
        <li>使用者應自行判斷內容的適用性</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">2. 法律責任</h3>
      <ul>
        <li>不承擔任何直接或間接損失的責任</li>
        <li>遇到詐騙應立即向警方報案</li>
        <li>本網站不提供法律建議</li>
      </ul>

      <h3 className="text-lg font-semibold text-gray-800 mt-6">3. 授權聲明</h3>
      <p>
        本網站內容採用 <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-700">創用 CC 姓名標示 4.0 國際授權條款</a>。
        這意味著您可以：
      </p>
      <ul>
        <li>分享：以任何媒介或格式重製及散布本素材</li>
        <li>改編：重混、轉換本素材、及依本素材建立新素材</li>
        <li>用於任何目的，包含商業性質</li>
      </ul>
      <p className="mt-4">
        惟需遵守以下條件：
      </p>
      <ul>
        <li>姓名標示：必須註明出處、提供授權條款連結、及說明是否已修改</li>
        <li>不得添加法律條款或科技措施，來限制他人依授權條款本已許可的作為</li>
      </ul>
    </PageLayout>
  );
}