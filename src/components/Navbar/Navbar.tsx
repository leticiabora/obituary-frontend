import Link from 'next/link';
import styles from './navbar.module.css';
import { LogoutIcon, UserIcon } from '@/assets/icons';
import { JWTPayload } from 'jose';
import Image from 'next/image';

type NavbarProps = {
  session: JWTPayload | null;
};

const Navbar = ({ session }: NavbarProps) => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.list_item}>
          <Link href="/">
            <Image src="/logo-transparent.png" width={80} height={80} alt="About my fellow logo" />
          </Link>
        </li>
        <div className={styles.links}>
          <li className={styles.list_item}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="/memorial">Memorial</Link>
          </li>
          <li className={styles.list_item}>
            <Link href="/memorial/create">Create a Memory</Link>
          </li>
        </div>
        <li>
          {session ? (
            <Link href="/login">
              <LogoutIcon width={20} height={20} />
            </Link>
          ) : (
            <Link href="/login">
              <UserIcon width={20} height={20} />
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
