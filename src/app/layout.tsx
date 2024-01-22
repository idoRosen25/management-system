import type { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import App from '../app';

export const metadata: Metadata = {
  title: 'Management System',
  description: 'Manage your tasks for productivity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <App>
      <Toaster position="bottom-center" />
      {children}
    </App>
  );
}
