import CreateTaskButton from '@/components/Button/CreateTaskButton';
import Button from './Button/Button';
import LogoutButton from './Button/LogoutButton/LogoutButton';

export default function Header() {
  return (
    <nav
      className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 bg-blue-400 h-[80px]"
      aria-label="Global"
    >
      <div className="flex lg:flex-1 gap-4"></div>
      <LogoutButton className="justify-self-end" />
      <CreateTaskButton className="justify-self-end" />
    </nav>
  );
}
