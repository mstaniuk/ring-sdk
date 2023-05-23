import { fetchData } from './fetcher';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';

// Mock global fetch function
global.fetch = vi.fn();
const mockedFetch = global.fetch as Mock;

describe('fetchData utility function', () => {
  const url = 'https://api.example.com/data';

  const clientOptions = {
    apiKey: '123456',
  };

  beforeEach(() => {
    mockedFetch.mockClear();
  });

  it('should resolve with data when fetching is successful', async () => {
    const mockData: any = { id: 1, value: 'test' };

    mockedFetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockData),
    });

    const result = await fetchData(url, clientOptions);
    expect(result).toEqual(mockData);
    expect(fetch).toBeCalledWith(url, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer 123456',
      },
    });
  });

  it('should throw generic error when failed to fetch data', async () => {
    mockedFetch.mockRejectedValueOnce(new Error('Fetch failed'));

    await expect(fetchData(url, clientOptions)).rejects.toThrow(
      'Fetching data failed'
    );
  });
});
