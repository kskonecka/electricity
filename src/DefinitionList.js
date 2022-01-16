import React from 'react';
import DataRow from './DataRow';
import { useAppContext } from './AppContext';

const formatDateTime = (date) => {
  if (!date) return '';

  return new Date(date).toLocaleString();
};

const Loader = () => (
  <div className={'flex mt-4 justify-center'}>
    <svg
      className="-ml-1 animate-spin h-5 mr-3 text-indigo-600 w-5"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx={12}
        cy={12}
        r={10}
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  </div>
);

function DefinitionList() {
  const { carbonQuery, powerConsumptionQuery, zonesQuery } = useAppContext();
  const { data: carbonData, isLoading: isLoadingCarbon } = carbonQuery;
  const { data: powerData, isLoading: isLoadingConsumption } =
    powerConsumptionQuery;

  if (isLoadingConsumption || isLoadingCarbon) {
    return <Loader />;
  }
  if (!carbonData || !powerData || !zonesQuery?.data) {
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
            value={carbonData?.carbonIntensity}
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
              value={powerData?.powerConsumptionTotal}
              unit={'MW'}
            />
            <DataRow
              title={'Biomass'}
              value={powerData?.powerConsumptionBreakdown?.biomass}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Coal'}
              value={powerData?.powerConsumptionBreakdown?.coal}
              unit={'MW'}
            />
            <DataRow
              title={'Gas'}
              value={powerData?.powerConsumptionBreakdown?.gas}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Geothermal'}
              value={powerData?.powerConsumptionBreakdown?.geothermal}
              unit={'MW'}
            />
            <DataRow
              title={'Hydro'}
              value={powerData?.powerConsumptionBreakdown?.hydro}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Nuclear'}
              value={powerData?.powerConsumptionBreakdown?.nuclear}
              unit={'MW'}
            />
            <DataRow
              title={'Oil'}
              value={powerData?.powerConsumptionBreakdown?.oil}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Solar'}
              value={powerData?.powerConsumptionBreakdown?.solar}
              unit={'MW'}
            />
            <DataRow
              title={'Wind'}
              value={powerData?.powerConsumptionBreakdown?.wind}
              unit={'MW'}
              light
            />
            <DataRow
              title={'Unknown'}
              value={powerData?.powerConsumptionBreakdown?.unknown}
              unit={'MW'}
            />
            <DataRow
              title={'Renewable %'}
              value={powerData?.renewablePercentage}
              unit={'%'}
              light
            />
            <DataRow
              title={'Fossil Free %'}
              value={powerData?.fossilFreePercentage}
              unit={'%'}
            />
          </dl>
        </div>
      </div>
    </div>
  );
}

export default DefinitionList;
