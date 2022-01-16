import { useQuery } from 'react-query';

export function useGetZones() {
  const url = 'https://api.electricitymap.org/v3/zones';

  return useQuery([url], async () => {
    const response = await fetch(url, {
      method: 'GET',
    });
    return response.json();
  });
}
