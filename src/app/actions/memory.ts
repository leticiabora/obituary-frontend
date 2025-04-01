'use server';

import { deleteMemory } from '@/services/memory';
import { getSession } from '@/app/actions/auth';

export async function deleteMemoryAction(id: number) {
  const session = await getSession();

  if (!session || !session.isAdmin) {
    throw new Error('Not authorized');
  }

  const post = await deleteMemory(id);
  return post;
}