'use client';

import Form from 'next/form';
import styles from '../styles.module.css';
import { createAccount } from '@/app/actions/auth';
import { useActionState } from 'react';

const Signup = () => {
  const [state, action, pending] = useActionState(createAccount, undefined)

  console.log('State', state);

  return (
    <div>
      <Form className={styles.container} action={action}>
        {state?.errors?.custom && <p className={styles.error}>{state?.errors?.custom}</p>}
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