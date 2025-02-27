'use client';

import { FormEvent } from 'react';
import styles from './styles.module.css';
import { getLogin } from '@/services/login';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get('email') as string;
      const password = formData.get('password') as string;

      await getLogin({ email, password });

      router.push('/memory/create');

    } catch (error) {
      console.log(error);
    }
    
  }

  return (
    <div>
      <form className={styles.container} onSubmit={onSubmit}>
          <label>
            Email
          <input type="email" name="email" required />
          </label>
          <label>
            Password
          <input type="password" name="password" required />
          </label>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login;