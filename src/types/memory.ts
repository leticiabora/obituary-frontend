import { CommentSchemaError } from '@/app/lib/definitions';

export interface CommentResponse {
  message?: string;
    id: number;
    createdAt: string;
    description: string;
    postId: string;
    author: {
      id: number;
      name: string;
    },
}
interface Post {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    name: string;
  };
  image: string;
  createdAt: string;
  comments: CommentResponse[]
}

export interface MemoryData {
  message: string;
  post: Post
}

export interface MemoriesData {
  posts: Post[];
}

export interface CommentData {
  state: CommentSchemaError,
  formData: FormData,
  postId: string,
}

export interface CommentForm {
  postId: string;
  description: FormDataEntryValue | null;
}