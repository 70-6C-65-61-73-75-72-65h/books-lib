import { AxiosRequestConfig } from 'axios';

export interface Error<T = null> {
  details: T;
  message: string;
  config: AxiosRequestConfig;
  status?: number;
}
