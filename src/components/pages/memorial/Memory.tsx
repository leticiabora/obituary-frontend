'use client';

import { CommentSchemaError, CreateCommentSchema } from '@/app/lib/definitions';
import { createComment } from '@/app/memorial/actions/actions';
import { Comment, Post } from '@/types/memory';
import CommentForm from './CommentForm';

import styles from './styles.module.css';
import { useState } from 'react';

interface Memory {
  memory: Post;
}

const Memorial = ({ memory }: Memory) => {
  const [comments, setComments] = useState<Comment[]>(memory.comments);
  // const [loading, setLoading] = useState(false);

  const addComment = async (
    state: CommentSchemaError,
    formData: FormData
  ): Promise<CommentSchemaError | Comment> => {
    // setLoading(true);
    
    try {
      const description = formData.get('description') as string;

      const commentData = {
        postId: memory.id,
        description,
      };
      
      const validatedFields = CreateCommentSchema.safeParse({
        description: commentData.description,
      });
    

      if (!validatedFields.success) {
        throw validatedFields.error.flatten().fieldErrors;
      }

      const comment = await createComment(commentData);
      
      const commentsList = [...comments, comment.comment];

      setComments(commentsList);

      return comment;
    } catch (error) {
      return error as CommentSchemaError;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Memories with my fellow</h2>
        <CommentForm addComment={addComment} />
      {comments.map((comment) => {
        return (
          <div key={comment.id} className={styles.comment}>
            <p>{comment.author.name}</p>
            <p>{comment.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Memorial;
