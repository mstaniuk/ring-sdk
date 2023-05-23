import {ClientOptions} from "./client";

export const fetchData = async <T>(
  url: string,
  clientOptions: ClientOptions
): Promise<T> => {
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${clientOptions.apiKey}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    // TODO: Handle error correctly
    console.error('Error fetching data:', error);
    throw new Error('Fetching data failed');
  }
};
