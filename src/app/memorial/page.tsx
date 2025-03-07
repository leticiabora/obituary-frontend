import { getMemories } from '@/services/memory';
import Image from 'next/image';

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
        <p>{memory.description}</p>
        <p>Created By: {memory?.user?.name}</p>
        </div>
    )})}
  </div>
}

export default Memories;