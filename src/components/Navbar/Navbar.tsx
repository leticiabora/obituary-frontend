import Link from 'next/link';
import './navbar.css';
import { Logout, UserIcon } from '@/assets/icons';
import { JWTPayload } from 'jose';

type NavbarProps = {
  session: JWTPayload | null;
};

const Navbar = ({ session }: NavbarProps) => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/memorial">Memorial</Link></li>
        <li><Link href="/memorial/create">Create a Memory</Link></li>
        <li>{session ? <Link href="/login"><Logout width={20} height={20} /></Link> : <Link href="/login"><UserIcon width={20} height={20} />Login</Link>}</li>
      </ul>
    </nav>
  )
}

export default Navbar;