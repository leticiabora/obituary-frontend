'use server';

import { getLogin, newAccount } from '@/services/login';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { SignupFormSchema, FormState } from '@/app/lib/definitions'

export async function loginUser(formData: FormData): Promise<void>  {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const loggedUser = await getLogin({ email, password });

    if (!loggedUser.token) {
      throw new Error('Missing token!');
    }
    
    await createSession(loggedUser.token);

  } catch (error) {
    throw error;
  }

  redirect('/');
}

  export async function createAccount(state: FormState, formData: FormData) {
    try {
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
      }
      const validatedFields = SignupFormSchema.safeParse({
        ...data,
        confirmPassword: formData.get('confirmPassword'),
      })
  
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
        }
      }
  
      const newData = await newAccount(data);

      return newData;
    } catch (error: unknown) {
      return {
        errors: {
          custom: error.response?.data?.message || 'Something went wrong. Please, try again!'
        }
      };
    }
    
  }
