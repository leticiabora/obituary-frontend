'use client';

import Form from 'next/form';
import styles from '../styles.module.css';
import { createAccount } from '@/app/actions/auth';
import { useActionState } from 'react';

const Signup = () => {
  const [state, action, pending] = useActionState(createAccount, undefined)

  return (
    <div>
      <Form className={styles.container} action={action}>
      <div>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
          {state?.errors?.name && <p>{state.errors.name}</p>}
        </label>
        </div>
        <div>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
          {state?.errors?.email && <p>{state.errors.email}</p>}
        </label>
        </div>
        <div>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        {state?.errors?.password && <p>{state.errors.password}</p>}
        </div>
        <div>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
        {state?.errors?.confirmPassword && <p>{state.errors.confirmPassword}</p>}

        </div>
        <button disabled={pending} type="submit">Signup</button>
      </Form>
    </div>
  );

};

export default Signup;