import React from 'react';
import { useLiveCarbonIntensity } from './useLiveCarbonIntensity';
import { useLivePowerConsumptionBreakdown } from './useLivePowerConsumptionBreakdown';
import { useGetZones } from './useGetZones';

let initialState = {
  latitude: undefined,
  longitude: undefined,
  locationError: undefined,
  isLoadingUserCoords: false,
};

const AppContext = React.createContext({
  state: initialState,
  dispatch: () => undefined,
  carbonQuery: undefined,
  powerConsumptionQuery: undefined,
});

function reducer(state, action) {
  switch (action.actionType) {
    case 'LoadingUserCoords': {
      return {
        ...state,
        isLoadingUserCoords: true,
        locationError: undefined,
      };
    }
    case 'GetUserCoords':
      return {
        ...state,
        latitude: action.payload.latitude,
        longitude: action.payload.longitude,
        isLoadingUserCoords: false,
        locationError: undefined,
      };
    case 'SetLocationError':
      return {
        ...state,
        locationError: action.payload.error,
        isLoadingUserCoords: false,
      };
    default:
      return state;
  }
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const zonesQuery = useGetZones();

  const carbonQuery = useLiveCarbonIntensity({
    latitude: state.latitude,
    longitude: state.longitude,
  });

  const powerConsumptionQuery = useLivePowerConsumptionBreakdown({
    latitude: state.latitude,
    longitude: state.longitude,
  });

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        carbonQuery,
        powerConsumptionQuery,
        zonesQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  return context;
};

export default AppProvider;
