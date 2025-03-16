'use client';

import Form from 'next/form';
import { createAccount } from '@/app/actions/auth';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';
import { Container, Error } from '../Auth.styles';
import CustomLink from '@/components/CustomLink/CustomLink';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Signup = () => {
  const [state, action, pending] = useActionState<AuthSchemaErrorType, FormData>(createAccount, initialState)

  return (
    <Container>
      <h1>Create an account</h1>
      <Form action={action}>
        {state?.message && <Error>{state?.message}</Error>}
      <div>
        <label htmlFor="name">
          Name
          <input type="text" name="name" />
          {state?.errors?.name && <Error>{state.errors.name}</Error>}
        </label>
        </div>
        <div>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
          {state?.errors?.email && <Error>{state.errors.email}</Error>}
        </label>
        </div>
        <div>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        {state?.errors?.password && <Error>{state.errors.password}</Error>}
        </div>
        <div>
        <label htmlFor="confirmPassword">
          Confirm Password
          <input type="password" name="confirmPassword" />
        </label>
        {state?.errors?.confirmPassword && <Error>{state.errors.confirmPassword}</Error>}
        </div>
        <button disabled={pending} type="submit">Signup</button>
      </Form>
      <p>Already have an account? <CustomLink href="/auth/login">Log in</CustomLink></p>
    </Container>
  );

};

export default Signup;