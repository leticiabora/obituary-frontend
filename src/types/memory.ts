export interface MemoryData {
  message: string;
  post: {
    id: number;
    title: string;
    description: string;
    user: {
      id: number;
      name: string;
    };
    image: string
  }
}