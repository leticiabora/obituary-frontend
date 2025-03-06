'use client';

import { loginUser } from '@/app/actions/auth';
import styles from '../styles.module.css';
import Form from 'next/form';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Login = () => {
  const [state, action, pending] = useActionState<
    AuthSchemaErrorType,
    FormData
  >(loginUser, initialState);

  return (
    <div className={styles.container}>
      {state?.message && <p className={styles.error}>{state?.message}</p>}
      <Form className={styles.container} action={action}>
        <div>
          <label htmlFor="email">
            Email
            <input type="email" name="email" required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input type="password" name="password" required />
          </label>
        </div>
        <button disabled={pending} type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
