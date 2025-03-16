'use client';

import Link from 'next/link';
import { CreateIcon, InfoIcon, LeafIcon, LogoutIcon, UserIcon } from '@/assets/icons';
import { JWTPayload } from 'jose';
import { logout } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { Container, Item, List } from './MobileNavbar.style';
import { Button } from '@/components/Button';

type NavbarProps = {
  session: JWTPayload | null;
};

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();

  const logoutUser = () => {
    try {
      logout();

      router.push('/');
    } catch (error){
      return error;
    }
  }
   
  return (
    <Container>
      <List>
          <Item>
            <Link href="/about"><InfoIcon width={30} height={30} /></Link>
          </Item>
          <Item>
            <Link href="/memorial"><LeafIcon width={30} height={30} /></Link>
          </Item>
          <Item>
            <Link href="/memorial/create"><CreateIcon width={30} height={30} /></Link>
          </Item>
        <li>
          {session ? (
            <Button variant='none' onClick={logoutUser}>
              <LogoutIcon width={20} height={20} />
            </Button>
          ) : (
            <Link href="/login">
              <UserIcon width={20} height={20} />
            </Link>
          )}
        </li>
      </List>
    </Container>
  );
};

export default Navbar;
