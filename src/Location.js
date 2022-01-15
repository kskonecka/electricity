import React, { useEffect } from 'react';
import { useAppContext } from './AppContext';

function Location() {
  const { dispatch } = useAppContext();

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

  return (
    <div className="text-center">
      <h1 className="mb-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Current electricity in your region
      </h1>
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        <Message />
      </h2>
    </div>
  );
}

const Message = () => {
  const { state, carbonQuery } = useAppContext();
  const { isLoadingUserCoords, latitude, longitude, locationError } = state;

  if (isLoadingUserCoords) {
    return (
      <span className={'animate-pulse'}>We are getting your location...</span>
    );
  } else if (longitude && latitude) {
    return (
      <>
        {' '}
        <div>{`Your coords are: ${state.longitude}, ${state.latitude}`}</div>
        {carbonQuery && carbonQuery.data ? (
          <div> Zone: {carbonQuery.data.zone}</div>
        ) : null}
      </>
    );
  } else if (locationError) {
    return locationError;
  } else {
    return `Please enable location services in your browser`;
  }
};

export default Location;
