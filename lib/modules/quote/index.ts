import {ClientOptions} from "../../core/client";
import {QuoteResponse} from "../../core/theOneApiTypes";
import {getAllFetch, getByIdFetch} from "./requests";


const getAllFactory = (clientOptions: ClientOptions) => async (): Promise<QuoteResponse[]> => {
  const responseData =  await getAllFetch(clientOptions);
  return responseData.docs;
}


const getByIdFactory = (clientOptions: ClientOptions) => async (id: string): Promise<QuoteResponse> => {
  const responseData =  await getByIdFetch(clientOptions, id);
  return responseData.docs[0];
}


export const moduleFactory = (clientOptions: ClientOptions) => ({
  getAll: getAllFactory(clientOptions),
  getById: getByIdFactory(clientOptions),
});
