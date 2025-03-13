import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { getSession } from './actions/auth';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'About my fellow',
  description: 'Reinterpreting longing, embracing memories, and celebrating the continuity of life.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();

  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>
        <div className="demo">Demo - WIP</div>
        <div className='container'>
          <Navbar session={session} />
          {children}
        </div>
      </body>
    </html>
  );
}
