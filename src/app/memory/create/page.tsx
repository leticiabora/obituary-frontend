'use client';

import { loginUser } from '@/app/actions/auth';
import Form from 'next/form';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Memory = () => {
  const [state, action, pending] = useActionState<
    AuthSchemaErrorType,
    FormData
  >(loginUser, initialState);

  return (
    <div >
      {state?.message && <p>{state?.message}</p>}
      <Form  action={action}>
        <div>
          <label>
            Title
            <input type="text" name="title" required />
          </label>
        </div>
        <div>
          <label>
            Picture
            <input type="file" name="image" required />
          </label>
        </div>
        <div>
          <label>
            Description
            <textarea rows={10} name="description" required />
          </label>
        </div>
        <button disabled={pending} type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
export default Memory;