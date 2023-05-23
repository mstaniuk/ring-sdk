import { getClientFactory } from './client.ts';
import { defaultApiUrl } from '../defaults';

import { describe, it, expect} from 'vitest';

describe('getClientFactory', () => {
  it('should return client modules with correct apiURL and apiKey', () => {
    const dummyModuleFactory = (options: any) => ({ dummy: true, ...options });
    const moduleFactories = { dummyModule: dummyModuleFactory };
    const options = { apiURL: 'https://example.com/api', apiKey: '12345' };

    const client = getClientFactory(moduleFactories)(options);
    expect(client.dummyModule).toEqual({
      dummy: true,
      apiURL: options.apiURL,
      apiKey: options.apiKey,
    });
  });

  it('should use default apiURL when not provided', () => {
    const dummyModuleFactory = (options: any) => ({ dummy: true, ...options });
    const moduleFactories = { dummyModule: dummyModuleFactory };
    const options = { apiKey: '12345' };

    const client = getClientFactory(moduleFactories)(options);
    expect(client.dummyModule).toEqual({
      dummy: true,
      apiURL: defaultApiUrl,
      apiKey: options.apiKey,
    });
  });

  it('should handle multiple modules', () => {
    const dummyModuleFactory1 = (options: any) => ({ dummy1: true, ...options });
    const dummyModuleFactory2 = (options: any) => ({ dummy2: true, ...options });
    const moduleFactories = { dummyModule1: dummyModuleFactory1, dummyModule2: dummyModuleFactory2 };
    const options = { apiURL: 'https://example.com/api', apiKey: '12345' };

    const client = getClientFactory(moduleFactories)(options);
    expect(client.dummyModule1).toEqual({
      dummy1: true,
      apiURL: options.apiURL,
      apiKey: options.apiKey,
    });
    expect(client.dummyModule2).toEqual({
      dummy2: true,
      apiURL: options.apiURL,
      apiKey: options.apiKey,
    });
  });
});
