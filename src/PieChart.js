import React from 'react';
import { useAppContext } from './AppContext';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = [
  'coal',
  'biomass',
  'gas',
  'geothermal',
  'hydro',
  'nuclear',
  'oil',
  'solar',
  'wind',
  'unknown',
];

const colors = [
  '174, 97, 48',
  '255, 99, 132',
  '155, 206, 86',
  '63, 191, 161',
  '63, 108, 191',
  '236, 38, 28',
  '165, 33, 38',
  '100, 138, 64',
  '39, 114, 38',
  '255, 159, 64',
];

function PieChart() {
  const { powerConsumptionQuery } = useAppContext();

  const { data: powerData, isLoading } = powerConsumptionQuery;

  if (!powerData || isLoading) {
    return null;
  }

  const data = {
    labels: labels.map((label) => label),
    datasets: [
      {
        data: labels.map(
          (label) => powerData?.powerConsumptionBreakdown?.[label]
        ),
        backgroundColor: colors.map((color) => `rgba(${color}, 0.4)`),
        borderColor: colors.map((color) => `rgba(${color}, 1)`),
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={'max-w-[600px] mx-auto'}>
      <h3
        className={
          'text-lg leading-6 font-medium text-gray-900 text-center mb-4'
        }
      >
        Power Consumption Breakdown (in MW)
      </h3>
      <Pie data={data} />
    </div>
  );
}

export default PieChart;
