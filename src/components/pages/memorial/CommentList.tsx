import { CommentResponse } from '@/types/memory';
import styles from './styles.module.css';

interface Comments {
  comments: CommentResponse[]
}

const CommentList = ({ comments }: Comments) => {
  return <div className={styles.container}>
    {
      comments.map((comment) => {
        return <div key={comment.id} className={styles.comment}>
          <p>{comment.author.name}</p>
          <p>{comment.description}</p>
          </div>
      })
    }
  </div>
}

export default CommentList;