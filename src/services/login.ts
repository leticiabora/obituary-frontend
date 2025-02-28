import api from './api';

interface Endpoint {
  email: string;
  password: string;
  token?: string;
}

interface SignUp {
  name: string;
  email: string;
  password: string;
}

export const getLogin = async (data: Endpoint) => {
  const result = await api.post<unknown, Endpoint>('/auth/login', {...data });

  return result;
}

export const newAccount = async (data: SignUp) => {
  const result = await api.post<unknown, Endpoint>('/auth/signup', {...data });

  console.log('RESULT', result);
}