import axios, { AxiosError } from 'axios';

import { API_HOST } from './global';
import { Error } from 'types/globals';

const axiosHandler = axios.create({
  baseURL: API_HOST,
});

axiosHandler.interceptors.response.use(undefined, (error: AxiosError<Error>) =>
  Promise.reject<Error>(error.response?.data)
);

export default axiosHandler;
