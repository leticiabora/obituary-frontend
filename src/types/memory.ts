interface Post {
  id: number;
  title: string;
  description: string;
  user: {
    id: number;
    name: string;
  };
  image: string
}

export interface MemoryData {
  message: string;
  post: Post
}

export interface MemoriesData {
  posts: Post[];
}