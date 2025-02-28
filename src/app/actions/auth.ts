'use server';

import { getLogin, newAccount } from '@/services/login';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';
import { SignupFormSchema, SignupSchemaErrorType } from '@/app/lib/definitions';
import { AxiosError } from 'axios';
import { ApiError } from '@/types/api';

export async function loginUser(formData: FormData): Promise<void | AxiosError<ApiError>> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const loggedUser = await getLogin({ email, password });

    if (!loggedUser.token) {
      throw new Error('Missing token!');
    }

    await createSession(loggedUser.token);
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return axiosError;
  }

  redirect('/');
}

export async function createAccount(
  state: SignupSchemaErrorType | null,
  formData: FormData
): Promise<SignupSchemaErrorType> {
  try {
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const validatedFields = SignupFormSchema.safeParse({
      ...data,
      confirmPassword: formData.get('confirmPassword'),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { name, email, password } = validatedFields.data;
    const newData = await newAccount({ name, email, password });

    return newData;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return {
      errors: {},
      message: 
          axiosError.response?.data?.message ||
          'Something went wrong. Please, try again!',
    };
  }
}
