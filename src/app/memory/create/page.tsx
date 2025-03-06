'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { MemorySchemaErrorType } from '@/app/lib/definitions';
import { createMemory } from '../actions/actions';
import styles from './styles.module.css';

const initialState: MemorySchemaErrorType = {
  errors: {},
  message: '',
};

const Memory = () => {
  const [state, action, pending] = useActionState<
  MemorySchemaErrorType,
    FormData
  >(createMemory, initialState);

  return (
    <div className={styles.container}>
      {state?.message && <p>{state?.message}</p>}
      <Form action={action}>
        <div>
          <label htmlFor="title">
            Title
            <input type="text" name="title" />
          </label>
          {state?.errors?.title && <p className={styles.error}>{state.errors.title}</p>}
        </div>
        <div>
          <label htmlFor="image">
            Picture
            <input type="file" name="image" accept="image/*" />
          </label>
          {state?.errors?.image && <p className={styles.error}>{state.errors.image}</p>}
        </div>
        <div>
          <label htmlFor="description">
            Description
            <textarea rows={10} name="description" />
          </label>
          {state?.errors?.description && <p className={styles.error}>{state.errors.description}</p>}
        </div>
        <button disabled={pending} type="submit">
          Login
        </button>
      </Form>
    </div>
  );
};
export default Memory;