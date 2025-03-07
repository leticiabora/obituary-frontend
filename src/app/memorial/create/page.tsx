'use client';

import Form from 'next/form';
import { useActionState } from 'react';
import { MemorySchemaErrorType } from '@/app/lib/definitions';
import { createMemory } from '../actions/actions';
import styles from '@/app/page.module.css';
import { useRouter } from 'next/navigation';
import { MemoryData } from '@/types/memory';

const initialState: MemorySchemaErrorType = {
  errors: {},
  message: '',
};

const Memory = () => {
  const router = useRouter();

  const addNewMemory = async (state: MemorySchemaErrorType, formData: FormData): Promise<MemoryData | MemorySchemaErrorType> => {
    const result = await createMemory(state, formData);

    if ('post' in result) {
      router.push('/memorial');
    }

    return result;
  }

  const [state, action, pending] = useActionState<
  MemorySchemaErrorType,
    FormData
  >(addNewMemory, initialState);

  return (
    <div className={styles.form_container}>
      {state?.message && <p>{state?.message}</p>}
      <Form className={styles.form_container} action={action}>
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
          Create a memory
        </button>
      </Form>
    </div>
  );
};
export default Memory;