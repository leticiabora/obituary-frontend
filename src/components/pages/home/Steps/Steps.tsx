import { PlantIcon, SeedIcon, TreeIcon } from '@/assets/icons';
import styles from './styles.module.css';

const Steps = () => {
  return (
<div className={styles.step_container}>
  <div className={styles.circle}>
    <div className={styles.step}>
      <p>Create a Memory</p>
      <div className={styles.icon}>
        <SeedIcon width={60} height={60} />
      </div>
    </div>
    <div className={styles.step}>
      <p>Comment and Share</p>
      <div className={styles.icon}>
      <PlantIcon width={60} height={60}/>
      </div>
    </div>
    <div className={styles.step}>
      <p>Make your tree grow</p>
      <div className={styles.icon}>
      <TreeIcon width={60} height={60} />
      </div>
    </div>
  </div>
</div>

  );
};

export default Steps;
