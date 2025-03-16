import { Post } from '@/types/memory';
import { Container, ImageContainer, LinkContainer } from './Avatar.styles';
import { ReactNode } from 'react';

interface Memory {
  memory: Post;
  children: ReactNode;
}

const MemoryAvatar = ({ memory, children }: Memory) => {
  return (
    <LinkContainer href={`/memorial/${memory.id}`}>
      <Container key={memory.id}>
        {memory?.image && memory.image.length && (
          <ImageContainer src={memory.image} width={200} height={200} alt={memory.title} />
        )}
      </Container>
      {children}
    </LinkContainer>
  );
};

export default MemoryAvatar;
