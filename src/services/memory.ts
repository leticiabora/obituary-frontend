import { MemoriesData, MemoryData } from '@/types/memory';
import api from './api';
import { MemorySchemaErrorType } from '@/app/lib/definitions';

export const getMemory = async (id: string) => {
  const result = await api.get<unknown, MemoryData>(`/post/${id}`);

  return result;
}

export const postMemory = async (data: FormData) => {
  const result = await api.post<unknown, MemoryData | MemorySchemaErrorType>('/post', data);

  return result;
}

export const getMemories = async () => {
  const result = await api.get<unknown, MemoriesData>('/posts');

  return result;
}