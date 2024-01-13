'use client';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  className?: string;
  href: string;
  children: ReactNode;
};
const LinkWrapper = ({ className = '', href, children }: Props) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default LinkWrapper;
