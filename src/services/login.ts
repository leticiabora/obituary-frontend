import { SignupSchemaErrorType } from '@/app/lib/definitions';
import api from './api';
import { Endpoint, Signup, SignUpResponse } from '@/types/login';

export const getLogin = async (data: Endpoint) => {
  const result = await api.post<unknown, Endpoint>('/auth/login', data);

  return result;
}

export const newAccount = async (data: Signup) => {
  const result = await api.post<unknown, SignUpResponse | SignupSchemaErrorType>('/auth/signup', data);
  console.log(result);

  return result;
}