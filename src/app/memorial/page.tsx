import { getMemories } from '@/services/memory';
import MemoryAvatar from '@/components/Avatar/MemoryAvatar';
import { Container, Detail, Memory, Title, Wrapper } from './Memorial.styles';

const Memories = async () => {
  const memories = await getMemories();

  if (!memories?.posts?.length) {
    return <div>No memories yet!</div>;
  }

  return (
    <Container>
      <h1>Memories</h1>
      <Wrapper>
        {memories.posts.map((memory) => {
          return (
            <Memory key={memory.id}>
              <MemoryAvatar memory={memory}>
                <Title>{memory.title}</Title>
                <Detail>Check Memory</Detail>
              </MemoryAvatar>
            </Memory>
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Memories;
