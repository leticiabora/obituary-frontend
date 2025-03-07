import { getMemories } from '@/services/memory';
import Image from 'next/image';
import Link from 'next/link';

const Memories = async () => {
  const memories = await getMemories();

  if (!memories?.posts?.length) {
    return <div>No memories yet!</div>
  }

  return <div>
    {memories.posts.map((memory) => {
      return (
      <div key={memory.id}>
        <p>{memory.id}</p>
        {memory?.image && memory.image.length && <Image src={memory.image} width={200} height={200} alt={memory.title} />}
        <p>{memory.title}</p>
        <Link href={`/memorial/${memory.id}`}>Check Memory</Link>
        {/* <p>{memory.description}</p> */}
        <p>Created By: {memory?.author?.name}</p>
        </div>
    )})}
  </div>
}

export default Memories;