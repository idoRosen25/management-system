import CreateTaskButton from '@/components/Button/CreateTaskButton';
import LogoutButton from './Button/LogoutButton/LogoutButton';

export default function Header() {
  return (
    <nav
      className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 bg-blue-700 bg-opacity-95 border-l border-l-black h-[80px]"
      aria-label="Global"
    >
      <span className="text-xl font-medium leading-none capitalize text-gray-900 text-opacity-80">
        Workspace
      </span>
      <div className="flex lg:flex-1 gap-4"></div>
      <CreateTaskButton className="justify-self-end" />
      <LogoutButton className="justify-self-end ml-2" />
    </nav>
  );
}
