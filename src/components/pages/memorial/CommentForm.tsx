'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { CommentSchemaError } from '@/app/lib/definitions';

import styles from './styles.module.css';

interface CreateComment {
  addComment: (state: CommentSchemaError, formData: FormData) => Promise<CommentSchemaError>;
}

const initialState: CommentSchemaError = {
  errors: {},
};

const CommentForm = ({ addComment }: CreateComment) => { 
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
            <p>{state?.description && state?.description}</p>
            <textarea id="description" rows={10} name="description" />
          </label>
        </div>
        <button disabled={pending} type="submit">
          Add Comment
        </button>
      </Form>
    </div>
  );
};
export default CommentForm;