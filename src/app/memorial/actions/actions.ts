'use server';

import { getSession } from '@/app/actions/auth';
import { CreateMemorySchema, MemorySchemaErrorType } from '@/app/lib/definitions';
import { postComment } from '@/services/comment';
import { postMemory } from '@/services/memory';
import { ApiError } from '@/types/api';
import { MemoryData } from '@/types/memory';
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

    console.log('error', error)
    return {
      errors: {},
      message:
        errorMessage?.error ||
        errorMessage?.message ||
        'Something went wrong. Please, try again!',
    };
  }
};

export const createComment = async (data) => {

  const commentData = {
    postId: data.postId,
    description: data.formData.get('description'),
  }

  const comment = await postComment(commentData);

  console.log('Comment', comment);

  return comment;
}
