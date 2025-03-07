// import { AuthSchemaErrorType } from '@/app/lib/definitions';
import api from './api';
// import { Endpoint, Signup, SignUpResponse } from '@/types/login';

export const postComment = async (data) => {
  const result = await api.post<unknown>('/comment', data);

  return result;
}