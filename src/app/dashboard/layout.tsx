import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Routes } from '../../consts';

export default function DashboardLayout(props: {
  children: React.ReactNode;
  task: React.ReactNode;
}) {
  const { children, task, ...rest } = props;
  console.log('props in dashbaord layout: ', rest);

  return (
    <div className="flex overflow-y-hidden no-scrollbar">
      <Sidebar route={Routes.DASHBOARD} />
      <div className="w-full">
        <Header />
        <main className="h-[calc(100vh-80px)] overflow-y-auto no-scrollbar">
          {children}
        </main>
      </div>
      {task}
    </div>
  );
}
