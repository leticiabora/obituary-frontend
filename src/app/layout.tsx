import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { getSession } from './actions/auth';
import StyledComponentsRegistry from './lib/registry';
import { ThemeProviderWrapper } from '@/theme/ThemeProvider';
import { DemoBanner } from './MainPage.styles';

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
      <StyledComponentsRegistry>
        <ThemeProviderWrapper>
        <DemoBanner>Demo - WIP</DemoBanner>
        <div className='container'>
          <Navbar session={session} />
          {children}
        </div>
        </ThemeProviderWrapper>
      </StyledComponentsRegistry>
      </body>
    </html>
  );
}
