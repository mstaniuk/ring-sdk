import {ClientOptions} from "../../core/client";
import {MovieResponse, QuoteResponse, Response} from "../../core/theOneApiTypes";
import {fetchData} from "../../core/fetcher";

export const getAllFetch = async (clientOptions: ClientOptions): Promise<Response<MovieResponse>> => {
  return fetchData<Response<MovieResponse>>(`${clientOptions.apiURL}/movie`, clientOptions);
}

export const getByIdFetch = async (clientOptions: ClientOptions, id: string): Promise<Response<MovieResponse>> => {
  return fetchData<Response<MovieResponse>>(`${clientOptions.apiURL}/movie/${id}`, clientOptions);
}

export const getQuoteByIdFetch = async (clientOptions: ClientOptions, id: string): Promise<Response<QuoteResponse>> => {
  return fetchData<Response<QuoteResponse>>(`${clientOptions.apiURL}/movie/${id}/quote`, clientOptions);
}
