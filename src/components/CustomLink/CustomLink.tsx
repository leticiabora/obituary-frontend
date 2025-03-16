import { ReactNode } from 'react';
import { LinkContainer } from './CustomLink.styles';
import Link from 'next/link';

interface LinkProps {
  variant?: 'primary' | 'button' | 'outlined';
  children: ReactNode | string;
  href: string;
  target?: string;
}



const CustomLink = ({ children, href, variant, ...props }: LinkProps) => {
  return (
    <Link  href={href} {...props}>
      <LinkContainer $variant={variant}>
        {children}
      </LinkContainer>
    </Link>
  );
};

export default CustomLink;
