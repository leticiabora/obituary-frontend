import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../config/envs';

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const onResponse = (response: AxiosResponse): AxiosResponse => response.data;

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  console.log('error: ', error.response?.data);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
