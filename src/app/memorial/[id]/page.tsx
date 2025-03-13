import { getMemory } from '@/services/memory';

import Memory from '@/components/pages/memorial/Memory';
import { Suspense } from 'react';
import MemoryAvatar from '@/components/Avatar/MemoryAvatar';
import dayjs from 'dayjs';

import styles from './styles.module.css';

dayjs().format() 

const MemoryPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  const post = await getMemory(id);
  const memory = post?.post;

  if (!memory) {
    return <div>Ops! Memory not available!</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{memory.title}</h1>
      <MemoryAvatar memory={memory} />
      <p><span className={styles.subitem}>Created by:</span> {memory.author.name}</p>
      <p><span className={styles.subitem}>Created at:</span> {dayjs(new Date(memory.createdAt).toString()).format('MMM 12, YYYY')}</p>
      <p>{memory.description}</p>

      <hr></hr>

      <Suspense fallback={<p>Loading!!!</p>}>
        <Memory memory={memory} />
      </Suspense>
    </div>
  );
};

export default MemoryPage;
