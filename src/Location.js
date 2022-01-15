import React, { useEffect } from 'react';
import { useAppContext } from './AppContext';

function Location() {
  const { state, dispatch } = useAppContext();
  // const { isLoadingUserCoords } = state;

  const onChange = ({ coords }) => {
    dispatch({
      actionType: 'GetUserCoords',
      payload: {
        latitude: coords.latitude,
        longitude: coords.longitude,
      },
    });
  };

  const onError = (error) => {
    dispatch({
      actionType: 'SetLocationError',
      payload: {
        locationError: error.message,
      },
    });
  };
  useEffect(() => {
    dispatch({
      actionType: 'LoadingUserCoords',
    });
    const geo = navigator.geolocation;
    console.log('navigator', navigator);
    if (!geo) {
      dispatch({
        actionType: 'SetLocationError',
        payload: {
          locationError: 'Geolocation is not supported',
        },
      });
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    return () => geo.clearWatch(watcher);
  }, []);

  // console.log('state', state);

  return (
    <div>
      Your coords are: {state.longitude}, {state.latitude}{' '}
    </div>
  );
}

export default Location;
