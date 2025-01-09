{/* 將圖表顏色改為綠色 */}
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { JourneyMap } from '../types/journey';
import { Frown, Meh, Smile } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getEmotionIcon = (score: number) => {
  if (score <= 3) return <Frown className="w-5 h-5 text-red-500" />;
  if (score <= 7) return <Meh className="w-5 h-5 text-yellow-500" />;
  return <Smile className="w-5 h-5 text-green-500" />;
};

interface EmotionChartProps {
  journey: JourneyMap;
}

export function EmotionChart({ journey }: EmotionChartProps) {
  const steps = [
    { label: '觸發事件', step: journey.step1_trigger },
    { label: '初始互動', step: journey.step2_interaction },
    { label: '建立信任', step: journey.step3_trust },
    { label: '轉折點', step: journey.step4_turning },
    { label: '結論', step: journey.step5_conclusion },
    { label: '後續影響', step: journey.step6_aftermath },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: '情緒起伏圖',
        font: {
          size: 16
        }
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const index = context.dataIndex;
            const step = steps[index];
            return [
              `步驟：${step.step.step_name}`,
              `情緒指數: ${step.step.emotion_score}`,
              `情緒描述: ${step.step.emotion}`
            ];
          }
        }
      }
    },
    scales: {
      y: {
        min: 1,
        max: 10,
        ticks: {
          stepSize: 1
        }
      }
    },
    elements: {
      point: {
        radius: 8,
        backgroundColor: 'white',
        borderWidth: 2,
        hoverRadius: 10,
      }
    }
  };
  
  const data = {
    labels: steps.map(s => s.label),
    datasets: [
      {
        label: '情緒指數',
        data: steps.map(s => s.step.emotion_score),
        borderColor: 'rgb(16, 185, 129)', // emerald-500
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="mt-6 p-4 bg-white rounded-lg shadow-sm">
      <div className="relative h-[300px] md:h-[400px]">
        <Line options={options} data={data} />
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="flex justify-between px-[10%] mt-[60px]">
            {steps.map((step, index) => (
              <div key={index} className="transform -translate-y-1">
                {getEmotionIcon(step.step.emotion_score)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}