import { getMemory } from '@/services/memory';
import Image from 'next/image';

import Memory from '@/components/pages/memorial/Memory';

const MemoryPage = async ({ params }: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params;

  const post = await getMemory(id);
  const memory = post?.post;

  if (!memory) {
    return <div>Ops! Memory not available!</div>
  }

  return <div>
    <h1>{memory.title}</h1>
    <Image src={memory.image} height={200} width={200} alt={memory.title}/>
    <p>{memory.description}</p>
    <p>{memory.author.name}</p>
    <p>Created at: {new Date(memory.createdAt).toString()}</p>

    <hr></hr>

  <Memory memory={memory} />
  </div>
}

export default MemoryPage;