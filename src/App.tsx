import React from 'react';
import { JourneyForm } from './components/JourneyForm';
import { JourneyList } from './components/JourneyList';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HowToStart } from './components/HowToStart';
import { AboutPage } from './components/AboutPage';
import { Terms, Privacy, Disclaimer } from './components/LegalPages';
import { SearchBox } from './components/SearchBox';

type LegalPage = 'terms' | 'privacy' | 'disclaimer' | null;

export default function App() {
  const [showForm, setShowForm] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [legalPage, setLegalPage] = React.useState<LegalPage>(null);
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleAddClick = () => {
    setShowForm(true);
    setShowAbout(false);
    setLegalPage(null);
  };

  const handleShowLegal = (page: LegalPage) => {
    setLegalPage(page);
    setShowForm(false);
    setShowAbout(false);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const renderContent = () => {
    if (legalPage === 'terms') return <Terms onClose={() => setLegalPage(null)} />;
    if (legalPage === 'privacy') return <Privacy onClose={() => setLegalPage(null)} />;
    if (legalPage === 'disclaimer') return <Disclaimer onClose={() => setLegalPage(null)} />;
    if (showAbout) return <AboutPage onClose={() => setShowAbout(false)} />;
    if (showForm) return <JourneyForm onCancel={() => setShowForm(false)} />;

    return (
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">分享你的使用者旅程地圖 🗺️</h1>
          <p className="text-gray-600 leading-relaxed">
            這是一個協助記錄和分析使用者體驗的工具，通過六個關鍵階段來追蹤使用者的情緒變化和經歷。
            透過這個工具，我們希望能夠：
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-600 space-y-2">
            <li>幫助使用者整理和理解自己的體驗歷程</li>
            <li>為產品設計和服務改善提供真實的案例參考</li>
            <li>分析使用者行為模式和情緒變化</li>
            <li>促進經驗分享和交流</li>
          </ul>
        </div>
        <HowToStart />
        <SearchBox onSearch={handleSearch} />
        <JourneyList searchQuery={searchQuery} />
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header 
        onAddClick={handleAddClick}
        onAboutClick={() => {
          setShowAbout(true);
          setShowForm(false);
          setLegalPage(null);
        }}
      />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer onShowLegal={handleShowLegal} />
    </div>
  );
}