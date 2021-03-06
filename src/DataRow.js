import React from 'react';

function DataRow({ title, value, unit = '', light = false }) {
  const valueWithUnit = `${value} ${unit}`;
  return (
    <div
      className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
        light ? 'bg-white' : 'bg-gray-50'
      } `}
    >
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {value >= 0 ? valueWithUnit : ''}
      </dd>
    </div>
  );
}

export default DataRow;
