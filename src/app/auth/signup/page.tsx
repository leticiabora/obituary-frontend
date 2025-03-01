'use client';

import Form from 'next/form';
import styles from '../styles.module.css';
import { createAccount } from '@/app/actions/auth';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Signup = () => {
  const [state, action, pending] = useActionState<AuthSchemaErrorType, FormData>(createAccount, initialState)

  return (
    <div>
      <Form className={styles.container} action={action}>
        {state?.message && <p className={styles.error}>{state?.message}</p>}
      <div>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
          {state?.errors?.name && <p className={styles.error}>{state.errors.name}</p>}
        </label>
        </div>
        <div>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
          {state?.errors?.email && <p className={styles.error}>{state.errors.email}</p>}
        </label>
        </div>
        <div>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        {state?.errors?.password && <p className={styles.error}>{state.errors.password}</p>}
        </div>
        <div>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
        {state?.errors?.confirmPassword && <p className={styles.error}>{state.errors.confirmPassword}</p>}
        </div>
        <button disabled={pending} type="submit">Signup</button>
      </Form>
    </div>
  );

};

export default Signup;