import React from 'react';
import { Download } from 'lucide-react';
import { JourneyMap } from '../types/journey';
import { supabase } from '../lib/supabase';
import { EmotionChart } from './EmotionChart';

interface JourneyListProps {
  searchQuery?: string;
}

export function JourneyList({ searchQuery = '' }: JourneyListProps) {
  const [journeys, setJourneys] = React.useState<JourneyMap[]>([]);
  const [loading, setLoading] = React.useState(true);

  const fetchJourneys = async () => {
    try {
      let query = supabase
        .from('journey_maps')
        .select('*')
        .order('created_at', { ascending: false });

      if (searchQuery) {
        query = query.or(`journey_title.ilike.%${searchQuery}%,context.ilike.%${searchQuery}%,goal.ilike.%${searchQuery}%`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setJourneys(data || []);
    } catch (error) {
      console.error('Error fetching journeys:', error);
      alert('載入資料失敗，請重新整理頁面');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchJourneys();
  }, [searchQuery]);

  const downloadJourneyCSV = (journey: JourneyMap) => {
    const steps = [
      { name: '觸發事件', data: journey.step1_trigger },
      { name: '初始互動', data: journey.step2_interaction },
      { name: '建立信任', data: journey.step3_trust },
      { name: '轉折點', data: journey.step4_turning },
      { name: '結論', data: journey.step5_conclusion },
      { name: '後續影響', data: journey.step6_aftermath }
    ];

    const headers = ['步驟', '使用者行為', '描述', '系統/產品回應', '痛點或改善機會', '情緒指數', '情緒描述'];
    const csvData = steps.map(({ name, data }) => [
      name,
      data.step_name,
      data.description,
      data.scammer_action,
      data.pain_point,
      data.emotion_score,
      data.emotion
    ]);

    const csvContent = [
      `使用者類型：${journey.journey_title}`,
      `作者：${journey.author_name || '匿名'}`,
      `建立時間：${new Date(journey.created_at).toLocaleDateString('zh-TW')}`,
      `情境：${journey.context || ''}`,
      `目標：${journey.goal || ''}`,
      '',
      headers.join(','),
      ...csvData.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `journey-${journey.journey_id}.csv`;
    link.click();
  };

  if (loading) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-500">載入中...</p>
      </div>
    );
  }

  if (journeys.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow">
        <p className="text-gray-500">
          {searchQuery ? '沒有找到符合搜尋條件的旅程地圖' : '目前還沒有旅程記錄'}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {journeys.map(journey => (
        <div key={journey.journey_id} className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-gray-900">
                  使用者類型：{journey.journey_title}
                </h3>
                <p className="text-sm text-gray-500">
                  作者：{journey.author_name || '匿名'} | 
                  建立時間：{new Date(journey.created_at).toLocaleDateString('zh-TW')}
                </p>
                {journey.context && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">情境：</p>
                    <p className="text-gray-600">{journey.context}</p>
                  </div>
                )}
                {journey.goal && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-gray-700">目標：</p>
                    <p className="text-gray-600">{journey.goal}</p>
                  </div>
                )}
              </div>
              <button
                onClick={() => downloadJourneyCSV(journey)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-3 py-1.5 rounded-md hover:bg-gray-100"
              >
                <Download className="w-5 h-5" />
                <span>下載 CSV</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {[
              { title: '觸發事件', step: journey.step1_trigger },
              { title: '初始互動', step: journey.step2_interaction },
              { title: '建立信任', step: journey.step3_trust },
              { title: '轉折點', step: journey.step4_turning },
              { title: '結論', step: journey.step5_conclusion },
              { title: '後續影響', step: journey.step6_aftermath }
            ].map(({ title, step }, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-medium text-gray-900 mb-3 pb-2 border-b">
                  {title}
                </h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">使用者行為</p>
                    <p className="text-gray-900">{step.step_name}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">描述</p>
                    <p className="text-gray-900 text-sm">{step.description}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">系統/產品回應</p>
                    <p className="text-gray-900 text-sm">{step.scammer_action}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">痛點或改善機會</p>
                    <p className="text-gray-900 text-sm">{step.pain_point}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">情緒指數</p>
                    <p className="text-gray-900">{step.emotion_score}/10</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">情緒描述</p>
                    <p className="text-gray-900 text-sm">{step.emotion}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <EmotionChart journey={journey} />
          </div>
        </div>
      ))}
    </div>
  );
}