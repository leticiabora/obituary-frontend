import CommentForm from '@/components/pages/memorial/CommentForm';
import CommentList from '@/components/pages/memorial/CommentList';
import { getMemory } from '@/services/memory';
import Image from 'next/image';

import styles from './styles.module.css';
import { createComment } from '../actions/actions';
import { CommentSchemaError } from '@/app/lib/definitions';
import Memorial from '@/components/pages/memorial/Memorial';
// import { getSession } from '@/app/actions/auth';

const MemoryPage = async ({ params }: {
  params: Promise<{ id: string }>
}) => {
  // const session = await getSession();

  // const currentUser = session?.id; 

  // console.log('session', session)
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

  <Memorial memory={memory} />
  </div>
}

export default MemoryPage;