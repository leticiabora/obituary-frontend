import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  variable: '--font-quicksand',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  // title: "Roots Forest",
  title: 'Grove Roots',
  description: 'Reinterpreting longing, embracing memories, and celebrating the continuity of life.',
};

// Resignificando a saudade, abraçando as lembranças e celebrando a continuidade da vida.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable}`}>
        <div className='container'>
          {children}
        </div>
      </body>
    </html>
  );
}
