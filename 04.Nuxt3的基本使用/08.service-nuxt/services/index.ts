import type { AsyncData, UseFetchOptions } from "nuxt/app";

const BASE_URL = "http://codercba.com:9060/juanpi/api/";
type Methods = "GET" | "POST";

export interface IResultData<T> {
  code: number;
  data: T;
}

class HYRequest {
  request<T = any>(
    url: string,
    method: Methods,
    data?: any,
    options?: UseFetchOptions<T>
  ): Promise<AsyncData<T, Error>> {
    return new Promise((resolve, reject) => {
      const newOptions: UseFetchOptions<T> = {
        baseURL: BASE_URL,
        method: method,
        ...options,
      };
      if (method === "GET") {
        newOptions.query = data;
      }
      if (method === "POST") {
        newOptions.body = data;
      }
      useFetch<T>(url, newOptions as any)
        .then((res) => {
          // res => {data: T, pending, refresh, error...} => AsyncData
          resolve(res as AsyncData<T, Error>);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "GET", params, options)
  } 
  post<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
    return this.request(url, "POST", params, options)
  } 
}

export default new HYRequest();
