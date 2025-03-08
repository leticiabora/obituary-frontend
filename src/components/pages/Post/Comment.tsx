'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { CommentSchemaError } from '@/app/lib/definitions';
import { createComment } from '@/app/memorial/actions/actions';
import { CommentResponse } from '@/types/memory';

type CommentProps = {
  postId: string;
};

const initialState: CommentSchemaError = {
  errors: {},
};

const Comment = ({ postId }: CommentProps) => { 
  const addComment = async (state: CommentSchemaError, formData: FormData): Promise<CommentSchemaError | CommentResponse> => {
    const data = {
      state,
      formData,
      postId
    }
    const comment = await createComment(data);

    return comment;
  }
  const [state, action, pending] = useActionState<
    CommentSchemaError,
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