import Link from 'next/link';
import styles from './page.module.css';
import Steps from '@/components/pages/home/Steps/Steps';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <div className={styles.title_container}>
            <h1 className={styles.title}>About my fellow</h1>
            <h2>A thoughtful space for remembrance and celebration</h2>
            <h3>
              <span className={styles.subtitle}>
                Reinterpreting longing, embracing memories, and celebrating the
                continuity of life
              </span>
            </h3>
        </div>
        <div className={styles.action_container}>
            <div className={styles.actions}>
              <p>
                Share the memories of your loved ones — both people and pets —
                in a space of tribute and connection.
              </p>
              <p>
                Join us to honor their lives and keep their memories alive. Each
                memory planted becomes a part of a growing legacy, nurturing
                love, remembrance, and togetherness across generations.
              </p>
              <div className={styles.action_button_container}>
                <Link href="/auth/login">
                  <button>Login</button>
                </Link>
                <Link href="/memorial">
                  <button className={styles.action_button}>
                    Check memorial
                  </button>
                </Link>
              </div>
            </div>
          <div className={styles.steps}>
            <Steps />
          </div>
          </div>
      </main>
    </div>
  );
}
