import CreateTaskButton from '@/components/Button/CreateTaskButton';

export default function Header() {
  return (
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-blue-400 h-[80px]"
      aria-label="Global"
    >
      <div className="flex lg:flex-1"></div>
      <CreateTaskButton className="justify-self-end" />
    </nav>
  );
}
