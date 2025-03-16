'use client';

import Link from 'next/link';
import { LogoutIcon, UserIcon } from '@/assets/icons';
import { JWTPayload } from 'jose';
import Image from 'next/image';
import { logout } from '@/app/actions/auth';
import { useRouter } from 'next/navigation';
import { Button } from '../Button';
import { Container, Item, Links, List } from './Navbar.style';
import CustomLink from '../CustomLink/CustomLink';

type NavbarProps = {
  session: JWTPayload | null;
};

const Navbar = ({ session }: NavbarProps) => {
  const router = useRouter();

  const logoutUser = () => {
    try {
      logout();

      router.push('/');
    } catch (error) {
      return error;
    }
  };

  return (
    <Container>
      <List>
        <Item>
          <CustomLink variant="none" href="/">
            <Image src="/logo-transparent.png" width={80} height={80} alt="About my fellow logo" />
          </CustomLink>
        </Item>
        <Links>
          <Item>
            <CustomLink href="/about">About</CustomLink>
          </Item>
          <Item>
            <CustomLink href="/memorial">Memorial</CustomLink>
          </Item>
          <Item>
            <CustomLink href="/memorial/create">Create a Memory</CustomLink>
          </Item>
        </Links>
        <li>
          {session ? (
            <Button variant="none" onClick={logoutUser}>
              <LogoutIcon width={20} height={20} />
            </Button>
          ) : (
            <CustomLink variant="none" href="/login">
              <UserIcon width={20} height={20} />
            </CustomLink>
          )}
        </li>
      </List>
    </Container>
  );
};

export default Navbar;
