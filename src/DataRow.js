import React from 'react';

// eslint-disable-next-line react/prop-types
function DataRow({ title, value, unit = '', light = false }) {
  return (
    <div
      className={`px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${
        light ? 'bg-white' : 'bg-gray-50'
      } `}
    >
      <dt className="text-sm font-medium text-gray-500">{title}</dt>
      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
        {value ? `${value} ${unit}` : ''}
      </dd>
    </div>
  );
}

export default DataRow;
