import { getMemories } from '@/services/memory';
import Link from 'next/link';
import styles from './styles.module.css';
import MemoryAvatar from '@/components/Avatar/MemoryAvatar';

const Memories = async () => {
  const memories = await getMemories();

  if (!memories?.posts?.length) {
    return <div>No memories yet!</div>
  }

  return <div className={styles.container}>
    {memories.posts.map((memory) => {
      return (
      <div className={styles.memory} key={memory.id}>
        <MemoryAvatar memory={memory} />
        <h3>{memory.title}</h3>
        <Link className={styles.link} href={`/memorial/${memory.id}`}>Check Memory</Link>
        </div>
    )})}
  </div>
}

export default Memories;