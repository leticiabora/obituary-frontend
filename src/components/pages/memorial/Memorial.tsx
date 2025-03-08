'use client';

import { CommentSchemaError } from "@/app/lib/definitions";
import { createComment } from "@/app/memorial/actions/actions";
import { CommentResponse } from "@/types/memory";
import CommentList from "./CommentList";
import CommentForm from './CommentForm';

import styles from './styles.module.css';
import Image from "next/image";
import { useEffect, useState } from "react";

const Memorial = ({ memory }) => {
  const [comments, setComments] = useState(memory.comments);
  const [loading, setLoading] = useState(false);

  const addComment = async (state: CommentSchemaError, formData: FormData): Promise<CommentSchemaError | CommentResponse> => {
    setLoading(true);

    try {
      const data = {
        state,
        formData,
        postId: memory.id
      }
      const comment = await createComment(data);
  
      const commentsList = [...comments, comment.comment];

      console.log(commentsList)
  
      setComments(commentsList);
  
      return comment;
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>

  return <div className={styles.container}>
      <h2>Memories with my fellow</h2>
        <CommentForm postId={memory.id} addComment={addComment} />
        <CommentList comments={comments}/>
    </div>
}

export default Memorial;