import React from 'react';

let initialState = {
  latitude: undefined,
  longitude: undefined,
  locationError: undefined,
  isLoadingUserCoords: false,
};

const AppContext = React.createContext({
  state: initialState,
  dispatch: () => undefined,
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
      console.log('holaaaa');
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

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);

  return context;
};

export default AppProvider;
