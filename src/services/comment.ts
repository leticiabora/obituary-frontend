import api from './api';
import { CommentForm, CommentResponse } from '@/types/memory';

export const postComment = async (data: CommentForm) => {
  const result = await api.post<unknown, CommentResponse>('/comment', data);

  return result;
}