import { MemoryData } from '@/types/memory';
import api from './api';
import { MemorySchemaErrorType } from '@/app/lib/definitions';

export const postMemory = async (data: FormData) => {
  const result = await api.post<unknown, MemoryData | MemorySchemaErrorType>('/post', data);

  return result;
}