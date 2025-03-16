'use client';

import { loginUser } from '@/app/actions/auth';
import Form from 'next/form';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';
import CustomLink from '@/components/CustomLink/CustomLink';
import { Container, Error } from '../Auth.styles';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Login = () => {
  const [state, action, pending] = useActionState<AuthSchemaErrorType, FormData>(
    loginUser,
    initialState,
  );

  return (
    <Container>
      <h1>Login</h1>
      {state?.message && <Error>{state?.message}</Error>}
      <Form action={action}>
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
      <p>
        {'You don\'t have an account?'} <CustomLink href="/auth/signup">Click here</CustomLink>
      </p>
    </Container>
  );
};

export default Login;
