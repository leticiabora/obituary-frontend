'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { AuthSchemaErrorType } from '@/app/lib/definitions';
import { createComment } from '@/app/memorial/actions/actions';

const initialState: AuthSchemaErrorType = {
  errors: {},
};

const Comment = ({ postId }) => {
  const addComment = async (state, formData) => {
    const data = {
      state,
      formData,
      postId
    }
    const comment = await createComment(data);

    return comment;
  }
  const [state, action, pending] = useActionState<
    AuthSchemaErrorType,
    FormData
  >(addComment, initialState);

  return (
    <div >
      {state?.message && <p>{state?.message}</p>}
      <Form  action={action}>
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
export default Comment;