import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
