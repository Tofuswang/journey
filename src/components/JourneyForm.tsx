{/* 將按鈕和圖標顏色改為綠色 */}
import React from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { JourneyMap } from '../types/journey';
import { StepForm } from './StepForm';
import { MapIcon, X } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { UsageInstructions } from './UsageInstructions';

interface JourneyFormProps {
  onCancel: () => void;
}

export function JourneyForm({ onCancel }: JourneyFormProps) {
  const { register, handleSubmit } = useForm<JourneyMap>({
    defaultValues: {
      journey_id: uuidv4(),
      created_at: new Date().toISOString(),
    },
  });

  const onSubmit = async (data: JourneyMap) => {
    try {
      const { error } = await supabase
        .from('journey_maps')
        .insert(data);

      if (error) throw error;
      window.location.href = '/';
    } catch (error) {
      console.error('Error saving journey map:', error);
      alert('保存失敗，請稍後再試');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto py-4 px-4 md:py-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-3">
          <MapIcon className="w-8 h-8 text-emerald-600" />
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">紀錄使用者旅程地圖</h1>
        </div>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <UsageInstructions />

      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b">基本資訊</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">作者名稱（選填）</label>
            <input
              type="text"
              {...register('author_name')}
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">使用者類型</label>
            <input
              type="text"
              {...register('journey_title')}
              required
              placeholder="例如：新手用戶、資深用戶、特定族群"
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">情境</label>
            <textarea
              {...register('context')}
              required
              placeholder="例如：首次使用產品、遇到問題時、特定場景"
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-800 mb-1">目標</label>
            <textarea
              {...register('goal')}
              required
              placeholder="例如：完成特定任務、解決問題、達成目標"
              rows={2}
              className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-200"
            />
          </div>
        </div>
      </div>

      <StepForm
        stepNumber={1}
        stepTitle="觸發事件"
        register={register}
        stepKey="step1_trigger"
      />

      <StepForm
        stepNumber={2}
        stepTitle="初始互動"
        register={register}
        stepKey="step2_interaction"
      />

      <StepForm
        stepNumber={3}
        stepTitle="建立信任"
        register={register}
        stepKey="step3_trust"
      />

      <StepForm
        stepNumber={4}
        stepTitle="轉折點"
        register={register}
        stepKey="step4_turning"
      />

      <StepForm
        stepNumber={5}
        stepTitle="結論"
        register={register}
        stepKey="step5_conclusion"
      />

      <StepForm
        stepNumber={6}
        stepTitle="後續影響"
        register={register}
        stepKey="step6_aftermath"
      />

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="w-full py-3 px-6 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          取消
        </button>
        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-colors"
        >
          提交旅程地圖
        </button>
      </div>
    </form>
  );
}