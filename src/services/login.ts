import { SignupSchemaErrorType } from '@/app/lib/definitions';
import api from './api';

interface Endpoint {
  email: string;
  password: string;
  token?: string;
}

interface Signup {
  name: string;
  email: string;
  password: string;
}

interface SignUpResponse {
  message: string;
  user: {
    email: string;
    name: string;
  }
}

export const getLogin = async (data: Endpoint) => {
  const result = await api.post<unknown, Endpoint>('/auth/login', data);

  return result;
}

export const newAccount = async (data: Signup) => {
  const result = await api.post<unknown, SignUpResponse | SignupSchemaErrorType>('/auth/signup', data);
  console.log(result);

  return result;
}