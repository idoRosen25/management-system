import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { Routes } from '@/consts';
import LinkWrapper from '@/components/LinkWrapper';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex">
      <Sidebar />
      <div className="w-full">
        <Header />
        <main className="h-[calc(100vh-164px)] overflow-y-auto no-scrollbar">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
