'use server';

import { getLogin, newAccount } from '@/services/login';
import { createSession, decrypt } from '../lib/session';
import { redirect } from 'next/navigation';
import { SignupFormSchema, AuthSchemaErrorType, LoginFormSchema } from '@/app/lib/definitions';
import { AxiosError } from 'axios';
import { ApiError } from '@/types/api';
import { cookies } from 'next/headers';
import { JWTPayload } from 'jose';

export async function getSession(): Promise<JWTPayload | null> {
  const session = (await cookies()).get('token')?.value;

  if (!session) {
    return null;
  }

  const decryptSession = await decrypt(session);

  return decryptSession;
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.set('token', '', { expires: new Date(0), path: '/' });
}

export async function loginUser(
  state: AuthSchemaErrorType | null,
  formData: FormData
): Promise<AuthSchemaErrorType> {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const validatedFields = LoginFormSchema.safeParse({
      email,
      password,
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }
    const { data } = validatedFields;

    const loggedUser = await getLogin({ email: data.email, password: data.password });

    if (!loggedUser.token) {
      throw new Error('Missing token!');
    }

    await createSession(loggedUser.token);

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

  redirect('/');
}

export async function createAccount(
  state: AuthSchemaErrorType | null,
  formData: FormData
): Promise<AuthSchemaErrorType> {
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
    
    await newAccount({ name, email, password });

  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    return {
      errors: {},
      message: 
          axiosError.response?.data?.message ||
          'Something went wrong. Please, try again!',
    };
  }

  redirect('/auth/login');

}
