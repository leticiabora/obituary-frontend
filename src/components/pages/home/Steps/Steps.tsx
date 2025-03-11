import { LeafIcon, TreeIcon } from '@/assets/icons';
import styles from './styles.module.css';

const data = [
  {
    title: 'Plant a memory',
    description: 'Honor your fellow by creating a lasting tribute',
  },
  {
    title: 'Nurture a Memory',
    description: 'Keep memories alive by engaging and sharing your thoughts',
  },
  {
    title: 'Preserve Memories',
    description: 'Spread their legacy by sharing cherished moments',
  },
];

const Steps = () => {
  return (
    <div className={styles.step_container}>
      <div className={styles.circle}>
        {data.map((item) => (
          <div key={item.title} className={styles.step}>
            <div className={styles.icon}>
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
        <div className={styles.center}>
          <LeafIcon width={80} height={80} color="grey" />
        </div>
        <div className={styles.bottom}>
          <div className={styles.icon}>
            <TreeIcon width={120} height={120} />
          </div>
        </div>
      </div>
      <div className={styles.circle_mobile}>
        {data.map((item) => (
          <div key={item.title} className={styles.step}>
            <div className={styles.icon}>
              <p>{item.title}</p>
              <span>{item.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
