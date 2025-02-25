import api from './api';

interface Endpoint {
  email: string;
  password: string;
}

export const getLogin = async (data: Endpoint) => {
  const result = await api.post<unknown, Endpoint>('/auth/login', {...data });


  return result;
}