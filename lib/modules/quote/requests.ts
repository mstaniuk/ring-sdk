import {ClientOptions} from "../../core/client";
import {QuoteResponse, Response} from "../../core/theOneApiTypes";
import {fetchData} from "../../core/fetcher.ts";
export const getAllFetch = async (clientOptions: ClientOptions): Promise<Response<QuoteResponse>> => {
  return fetchData<Response<QuoteResponse>>(`${clientOptions.apiURL}/quote`, clientOptions);
}

export const getByIdFetch = async (clientOptions: ClientOptions, id: string): Promise<Response<QuoteResponse>> => {
  return fetchData<Response<QuoteResponse>>(`${clientOptions.apiURL}/quote/${id}`, clientOptions);
}
