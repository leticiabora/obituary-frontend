import { getMemories } from '@/services/memory';
import MemoryAvatar from '@/components/Avatar/MemoryAvatar';
import { Container, Detail, Memory, Title } from './Memorial.styles';

const Memories = async () => {
  const memories = await getMemories();

  if (!memories?.posts?.length) {
    return <div>No memories yet!</div>
  }

  return <Container>
    {memories.posts.map((memory) => {
      return (
      <Memory key={memory.id}>
        <MemoryAvatar memory={memory}>
          <Title>{memory.title}</Title>
          <Detail>Check Memory</Detail>
        </MemoryAvatar>
        </Memory>
    )})}
  </Container>
}

export default Memories;