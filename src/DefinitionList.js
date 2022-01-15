import React from 'react';
import DataRow from './DataRow';
import { useAppContext } from './AppContext';

function DefinitionList() {
  const { carbonQuery } = useAppContext();
  console.log(carbonQuery);
  const { data } = carbonQuery;
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="border-t border-gray-200">
        <dl>
          <DataRow title={'Zone'} value={data && data.zone} light />
          <DataRow
            title={'Carbon Intensity'}
            value={data && data.carbonIntensity}
            unit={'gCO2eq/kWh'}
          />

          <DataRow title={'TBC'} value={''} unit={''} light />
          <DataRow title={'TBC'} value={''} unit={''} />
        </dl>
      </div>
    </div>
  );
}

export default DefinitionList;
