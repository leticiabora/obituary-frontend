import Link from 'next/link';
import styles from './page.module.css';
import { PlantIcon } from '@/assets/icons';
import Steps from '@/components/pages/home/Steps/Steps';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            About my fellow
            <PlantIcon width={120} height={120}/>
          </h1>
          <h2>
            Reinterpreting longing, embracing memories, and celebrating the
            continuity of life
          </h2>
        </div>
        <div className={styles.action_container}>
          <div className={styles.actions}>
            <p>
            Share the memories of your loved ones in a space of tribute and connection. Join us to honor their lives and keep their memories alive.
            </p>
            <div className={styles.action_button_container}>
            <button>
              <Link href="/auth/login">
              Login
              </Link>
              </button>
            <button className={styles.action_button}>Check memorial</button>
            </div>
          </div>
          <div className={styles.steps}>
          <Steps />
          </div>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
