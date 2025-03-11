import { LeafIcon, TreeIcon } from '@/assets/icons';
import styles from './styles.module.css';

const Steps = () => {
  return (
<div className={styles.step_container}>
  <div className={styles.circle}>
    <div className={styles.step}>
      {/* <p>Create a Memory</p> */}
      <div className={styles.icon}>
       <p>Plant a Memory</p>
        <span>Honor your fellow by creating a lasting tribute</span>
        {/* <SeedIcon width={40} height={40} /> */}
      </div>
    </div>
    <div className={styles.step}>
      {/* <p>Comment and Share</p> */}
      <div className={styles.icon}>
      <p>Nurture a Memory</p>
      <span>Keep memories alive by engaging and sharing your thoughts</span>
      {/* <PlantIcon width={30} height={30}/> */}
      </div>
    </div>
    <div className={styles.step}>
      {/* <p>Make your tree grow</p> */}
      <div className={styles.icon}>
        <p>Preserve Memories</p>
        <span>Spread their legacy by sharing cherished moments</span>
      {/* <TreeIcon width={20} height={20} /> */}
      </div>
    </div>
    <div className={styles.center}>
      {/* <p>CENTER</p> */}
      {/* <div className={styles.icon}> */}
      <LeafIcon width={80} height={80} color="grey" />
      {/* </div> */}
    </div>
    <div className={styles.bottom}>
      {/* <p>BOTTOM</p> */}
      <div className={styles.icon}>
      <TreeIcon width={120} height={120} />
      </div>
    </div>
  </div>
</div>

  );
};

export default Steps;
