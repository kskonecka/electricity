import { useQuery } from 'react-query';
// : "carbon-intensity/latest"
// 1: "power-consumption-breakdown/latest"
// 2: "carbon-intensity/history"
// 3: "power-consumption-breakdown/history"
// 4: "carbon-intensity/forecast"
// 5: "power-consumption-breakdown/forecast"
export function useLiveCarbonIntensity({ latitude, longitude }) {
  const urlRoot = 'https://api.electricitymap.org/v3/carbon-intensity/latest';

  return useQuery([urlRoot, latitude, longitude], async () => {
    if (!latitude || !longitude) return;

    const searchParams = new URLSearchParams();

    if (latitude) {
      searchParams.set('lat', latitude);
    }
    if (longitude) {
      searchParams.set('lon', longitude);
    }
    const response = await fetch(`${urlRoot}?${searchParams.toString()}`, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line no-undef
        'auth-token': 'rILfhiFrZ3emXcVMGU62',
      },
    });
    return response.json();
  });
}
