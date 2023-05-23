import {defaultApiUrl} from "../defaults";

type Module = Record<string, unknown>;

interface ModuleFactories {
  [key: string]: (options: ClientOptions) => Module;
}

export interface ClientOptions {
  apiURL?: string;
  apiKey?: string;
}

const defaultOptions: ClientOptions = {
  apiURL: defaultApiUrl,
}

export const getClientFactory = <T extends ModuleFactories>(moduleFactories: T) => (options: ClientOptions = {}): { [K in keyof T]: ReturnType<T[K]> } => {
  const clientOptions = {...defaultOptions, ...options};

  const modules = Object.entries(moduleFactories).reduce((acc, [key, moduleFactory]) => {
    acc[key] = moduleFactory(clientOptions);
    return acc;
  }, {} as Record<string, Module>);

  return modules as any;
}
