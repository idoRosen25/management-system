import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function App({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'h-screen')}>{children}</body>
    </html>
  );
}
