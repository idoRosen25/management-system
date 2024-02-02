import CreateTaskButton from '@/components/Button/CreateTaskButton';
import LogoutButton from './Button/LogoutButton/LogoutButton';
import InviteUserButton from './Button/InviteUserButton';
import { getTeamById } from '@/utils/auth';

export default async function Header() {
  const team = await getTeamById();
  return (
    <nav
      className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 bg-blue-700 bg-opacity-95 border-l border-l-black h-[80px]"
      aria-label="Global"
    >
      <span className="text-xl font-medium leading-none capitalize text-gray-900 text-opacity-80">
        {team?.name || 'OctoManage'}
      </span>
      <div className="">
        <InviteUserButton className="ml-2 justify-self-end" />
      </div>
      <div className="flex lg:flex-1 gap-4"></div>
      <CreateTaskButton className="justify-self-end" />
      <LogoutButton className="justify-self-end ml-2" />
    </nav>
  );
}
