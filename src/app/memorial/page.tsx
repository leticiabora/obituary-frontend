import { getMemories } from '@/services/memory';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css';

const Memories = async () => {
  const memories = await getMemories();

  if (!memories?.posts?.length) {
    return <div>No memories yet!</div>
  }

  return <div className={styles.container}>
    {memories.posts.map((memory) => {
      return (
      <div className={styles.memory} key={memory.id}>
        {memory?.image && memory.image.length && <Image className={styles.image} src={memory.image} width={200} height={200} alt={memory.title} />}
        <h3>{memory.title}</h3>
        <Link className={styles.link} href={`/memorial/${memory.id}`}>Check Memory</Link>
        </div>
    )})}
  </div>
}

export default Memories;