'use client';

import { deleteMemoryAction } from '@/app/actions/memory';
import { Button } from '@/components/Button';
import { MemoriesData } from '@/types/memory';

const Posts = ({ posts }: MemoriesData) => {
  const deletePost = async (id: number) => {
    const post = await deleteMemoryAction(id);

    return post;
  }

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {post.title}
            {post.active ? <Button onClick={() => deletePost(post.id)} variant="danger">
              Delete
            </Button> : <p style={{ fontStyle: 'italic', backgroundColor: 'lightGrey', borderRadius: 10, padding: 4 }}>Inactive</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
