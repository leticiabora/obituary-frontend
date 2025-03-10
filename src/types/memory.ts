import { CommentSchemaError } from '@/app/lib/definitions';

export interface Comment {
  id: number;
  createdAt: string;
  updatedAt: string;
  description: string;
  postId: number;
  author: {
    id: number;
    name: string;
  };
}

export interface CommentResponse {
  message?: string;
  comment: Comment;

}
export interface Post {
  id: number;
  title: string;
  description: string;
  author: {
    id: number;
    name: string;
  };
  image: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
}

export interface MemoryData {
  message: string;
  post: Post;
}

export interface MemoriesData {
  posts: Post[];
}

export interface CommentData {
  state: CommentSchemaError | null;
  formData?: FormData;
  postId: number;
}

export interface CommentForm {
  postId: number;
  description: string;
}

export interface Comments {
  comments: Comment[];
}
