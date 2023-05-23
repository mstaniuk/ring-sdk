import {getAllFetch, getByIdFetch, getQuoteByIdFetch} from "./requests";
import {ClientOptions} from "../../core/client";
import {MovieResponse, QuoteResponse} from "../../core/theOneApiTypes";

const getAllFactory = (clientOptions: ClientOptions) => async (): Promise<MovieResponse[]> => {
  const responseData =  await getAllFetch(clientOptions);
  return responseData.docs;
}

const getByIdFactory = (clientOptions: ClientOptions) => async (id: string): Promise<MovieResponse> => {
  const responseData =  await getByIdFetch(clientOptions, id);
  return responseData.docs[0];
}

const getQuoteByIdFactory = (clientOptions: ClientOptions) => async (id: string): Promise<QuoteResponse[]> => {
  const responseData =  await getQuoteByIdFetch(clientOptions, id);
  return responseData.docs;
}

export const moduleFactory = (clientOptions: ClientOptions) => ({
  getAll: getAllFactory(clientOptions),
  getById: getByIdFactory(clientOptions),
  getQuoteById: getQuoteByIdFactory(clientOptions),
});
