import React from 'react';
import DataRow from './DataRow';
import { useAppContext } from './AppContext';

const formatDateTime = (date) => {
  if (!date) return '';

  return new Date(date).toLocaleString();
};

function DefinitionList() {
  const { carbonQuery, powerConsumptionQuery } = useAppContext();
  const { data: carbonData } = carbonQuery;
  const { data: powerData, isLoading } = powerConsumptionQuery;

  if (isLoading || !powerData || !carbonData) {
    return null;
  }
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6 flex justify-between">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Carbon Intensity
        </h3>
        <div>updated at: {formatDateTime(carbonData?.updatedAt)}</div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <DataRow
            title={'Carbon Intensity'}
            value={carbonData && carbonData.carbonIntensity}
            unit={'gCO2eq/kWh'}
          />
        </dl>
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Power Consumption Breakdown
          </h3>
          <div>updated at: {formatDateTime(powerData?.updatedAt)}</div>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <DataRow
              title={'Power Consumption Total'}
              value={powerData.powerConsumptionTotal}
              unit={'MW'}
            />
            <DataRow
              title={'Biomass'}
              value={powerData.powerConsumptionBreakdown.biomass}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Coal'}
              value={powerData.powerConsumptionBreakdown.coal}
              unit={'MW'}
            />
            <DataRow
              title={'Gas'}
              value={powerData.powerConsumptionBreakdown.gas}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Geothermal'}
              value={powerData.powerConsumptionBreakdown.geothermal}
              unit={'MW'}
            />
            <DataRow
              title={'Hydro'}
              value={powerData.powerConsumptionBreakdown.hydro}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Nuclear'}
              value={powerData.powerConsumptionBreakdown.nuclear}
              unit={'MW'}
            />
            <DataRow
              title={'Oil'}
              value={powerData.powerConsumptionBreakdown.oil}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Solar'}
              value={powerData.powerConsumptionBreakdown.solar}
              unit={'MW'}
            />
            <DataRow
              title={'Wind'}
              value={powerData.powerConsumptionBreakdown.wind}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Unknown'}
              value={powerData.powerConsumptionBreakdown.unknown}
              unit={'MW'}
            />
            <DataRow
              title={'Renewable %'}
              value={powerData.renewablePercentage}
              unit={'%'}
              light
            />
            <DataRow
              title={'Fossil Free %'}
              value={powerData.fossilFreePercentage}
              unit={'%'}
            />
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DefinitionList;
