import styles from './styles.module.css';
import Image from 'next/image';

const MemoryAvatar = ({ memory }) => {
  return (
    <div className={styles.memory} key={memory.id}>
      {memory?.image && memory.image.length && (
        <Image
          className={styles.image}
          src={memory.image}
          width={200}
          height={200}
          alt={memory.title}
        />
      )}
    </div>
  );
};

export default MemoryAvatar;
