'use server';

import { CreateMemorySchema, MemorySchemaErrorType } from '@/app/lib/definitions';
import { postComment } from '@/services/comment';
import { postMemory } from '@/services/memory';
import { ApiError } from '@/types/api';
import { CommentForm, CommentResponse, MemoryData } from '@/types/memory';
import { AxiosError } from 'axios';


 
export const createMemory = async (
  state: MemorySchemaErrorType | null,
  formData: FormData
): Promise<MemoryData | MemorySchemaErrorType> => {
  try {
        const title = formData.get('title');
        const description = formData.get('description');
        const image = formData.get('image')
    
        const validatedFields = CreateMemorySchema.safeParse({
          title, description, image,
        });
    
        if (!validatedFields.success) {
          return {
            errors: validatedFields.error.flatten().fieldErrors,
          };
        }

    const result = await postMemory(formData);

    return result;
    
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    const errorMessage = axiosError?.response?.data;

    return {
      errors: {},
      message:
        errorMessage?.error ||
        errorMessage?.message ||
        'Something went wrong. Please, try again!',
    };
  }
};

export const createComment = async (data: CommentForm): Promise<CommentResponse> => {

  const comment = await postComment(data);
  
  return comment;
};
