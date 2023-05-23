import {getClientFactory} from "./core/client";
import { moduleFactory as movieModuleFactory} from "./modules/movie";
import { moduleFactory as quoteModuleFactory} from "./modules/quote";


const activeModules = {
  movie: movieModuleFactory,
  quote: quoteModuleFactory,
}

export const getClient = getClientFactory(activeModules);
