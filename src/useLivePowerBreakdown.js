import { useQuery } from 'react-query';

export function useLivePowerBreakdown() {
  const url = 'https://api.electricitymap.org/v3/zones';

  return useQuery([url], async () => {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line no-undef
        'auth-token': process.env.API_TOKEN,
      },
    });
    return response.json();
  });
}
