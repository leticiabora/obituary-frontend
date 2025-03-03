import Link from 'next/link';
import styles from './page.module.css';
import { PlantIcon } from '@/assets/icons';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.title_container}>
          <h1 className={styles.title}>
            Grove Roots
            <PlantIcon width={120} height={120}/>
          </h1>
          <h2>
            Reinterpreting longing, embracing memories, and celebrating the
            continuity of life
          </h2>
        </div>
        <div className={styles.action_container}>
          <p>
            Start sharing memories
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
        <div className={styles.title_container}>
          <hr />
          <h2>About us</h2>
          <div>
          <p>Hey! My name is Leticia.</p>
          <p>I lost my brother in April 2023 when he was 30 years old. He went to the beach and drowned.</p>
          <p>We are a family that makes jokes about everything—my brother was probably the funniest one. He always made jokes about death and funerals, saying things like, "You can bury me in the backyard, but good luck digging the hole!" We always tried to make life lighter. So, when he passed away, these things helped me a lot during my grief. Every time I started to feel depressed, I remembered him talking about these things, making jokes, and it always helped me.</p>

          <p>I started talking more about my own funeral, the things I want when my time comes, and people always feel uncomfortable. They say, "Stop talking about this!" But hey, that day will come for all of us. Talking about it won’t make it any less painful, but we can make it lighter—helping people remember us with good feelings. His death is still incredibly painful, and it probably always will be. But life keeps happening, and we have two choices: we can let ourselves drown in grief (which our loved ones wouldn’t want, right?), or we can keep living—with a giant wound in our hearts.</p>

          <p>I was in pain, feeling like life was unfair, angry… and then my mom said something tough to me on the day my brother was being buried (in the cemetery, not the backyard). She said: "We are not better than anyone to be spared from this." It was a harsh, painful truth—but a real one.</p>

          <p>That’s why I chose Grove Roots. The life cycle can be unfair and painful, but at the same time, from death, we can have life. We can learn, grow, and love. When a tree dies, it nourishes the soil so that other plants can grow. While we lose our loved ones, new lives are being born. One day, we celebrate the gift of life; the next, we feel the pain of its cycle.</p>

          <p>If you're going through grief today, you are not alone. Sending you a virtual hug, and I can assure you—life deserves to be lived. And I bet your loved one agrees with me.</p>
          </div>
          {/* https://br.pinterest.com/pin/222857881535703073/ */}
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
