'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { CommentSchemaError } from '@/app/lib/definitions';
import { createComment } from '@/app/memorial/actions/actions';
import { CommentResponse } from '@/types/memory';

import styles from './styles.module.css';

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
    <div className={styles.container}>
      {state?.message && <p>{state?.message}</p>}
      <Form className={styles.form} action={action}>
        <div>
          <label htmlFor='description'>
            Comment about fellow
            <textarea rows={10} name="description" required />
          </label>
        </div>
        <button disabled={pending} type="submit">
          Add Comment
        </button>
      </Form>
    </div>
  );
};
export default Comment;