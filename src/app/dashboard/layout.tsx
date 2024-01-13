import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import PlatformIcon from '../../../public/icon_clradrvzb0001ld08bcxdff4w.png';
import { Routes } from '@/consts';
import LinkWrapper from '@/components/LinkWrapper';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex">
      <div
        className="hidden lg:block bg-green-400 min-w-[15rem] max-w-max"
        aria-modal="true"
      >
        <LinkWrapper
          href={Routes.DASHBOARD}
          className="flex items-center gap-2 p-4"
        >
          <Image
            width={50}
            height={50}
            src={PlatformIcon}
            alt="Platform Icon"
            className="rounded-md cursor-pointer"
          />
          <span className="text-lg font-medium">OctoManage</span>
        </LinkWrapper>
      </div>
      <div className="w-full">
        <Header />
        <main className="h-[calc(100vh-164px)] overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
