'use server';

import { getLogin } from '@/services/login';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';

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
