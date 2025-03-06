import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from '../config/envs';
import { cookies } from 'next/headers';

const getToken = async () => {
  const cookieStore = await cookies();
  return cookieStore.get('token')?.value;
};

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = await getToken();

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

const onResponse = (response: AxiosResponse): AxiosResponse => response.data;

const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
  console.log('error: ', error.response?.data);
  return Promise.reject(error);
};

axiosInstance.interceptors.response.use(onResponse, onResponseError);

export default axiosInstance;
