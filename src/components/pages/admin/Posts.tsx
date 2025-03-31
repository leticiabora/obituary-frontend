'use client';

import { Button } from '@/components/Button';

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <li key={post.id} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            {post.title}
            <Button onClick={() => console.log('click')} variant="danger">
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
