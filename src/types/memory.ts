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
}

export interface MemoryData {
  message: string;
  post: Post
}

export interface MemoriesData {
  posts: Post[];
}