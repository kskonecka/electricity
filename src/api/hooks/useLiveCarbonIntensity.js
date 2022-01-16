import { useQuery } from 'react-query';

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
        'auth-token': 'rILfhiFrZ3emXcVMGU62',
      },
    });
    return response.json();
  });
}
