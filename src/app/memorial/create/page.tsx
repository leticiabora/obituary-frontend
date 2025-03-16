'use client';

import { useActionState } from 'react';
import { MemorySchemaErrorType } from '@/app/lib/definitions';
import { createMemory } from '../actions/actions';
import { useRouter } from 'next/navigation';
import { MemoryData } from '@/types/memory';
import { Container, FormContainer, FormLabel } from '../Memorial.styles';

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
    <Container>
      {state?.message && <p>{state?.message}</p>}
      <FormContainer action={action}>
        <FormLabel>
          <label htmlFor="title">
            Title
            <input type="text" name="title" />
          </label>
          {state?.errors?.title && <p>{state.errors.title}</p>}
        </FormLabel>
        <FormLabel>
          <label htmlFor="image">
            Picture
            <input type="file" name="image" accept="image/*" />
          </label>
          {state?.errors?.image && <p>{state.errors.image}</p>}
        </FormLabel>
        <FormLabel>
          <label htmlFor="description">
            Description
            <textarea rows={10} name="description" />
          </label>
          {state?.errors?.description && <p>{state.errors.description}</p>}
        </FormLabel>
        <button disabled={pending} type="submit">
          Create a memory
        </button>
      </FormContainer>
    </Container>
  );
};
export default Memory;