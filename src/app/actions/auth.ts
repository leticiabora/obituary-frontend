'use server';

import { getLogin } from '@/services/login';
import { createSession } from '../lib/session';
import { redirect } from 'next/navigation';

export async function loginUser(formData: FormData) {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    const loggedUser = await getLogin({ email, password });

    await createSession(loggedUser.token);
  } catch (error) {
    console.log(error);

    return error;
  }

  redirect('/');
}
