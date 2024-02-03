import CreateTaskButton from '@/components/Button/CreateTaskButton';
import LogoutButton from './Button/LogoutButton/LogoutButton';
import CreateWorkSpaceButton from './Button/CreateWorkSpaceButton';
import { getWorkspaceById } from '@/utils/tasks';
import { getLoggedInUser } from '@/utils/auth';
import { User } from '@prisma/client';

export default async function Header() {
  const workspace = await getWorkspaceById();
  const user = getLoggedInUser();
  return (
    <nav
      className="mx-auto flex w-full items-center justify-between p-6 lg:px-8 bg-blue-700 bg-opacity-95 border-l border-l-black h-[80px]"
      aria-label="Global"
    >
      <span className="text-xl font-medium leading-none capitalize text-gray-900 text-opacity-80">
        {workspace?.name || 'Workspace'}
      </span>
      <div className="">
        <CreateWorkSpaceButton
          className="ml-2 bg-blue-500 text-white rounded-full"
          user={user as User}
        />
      </div>
      <div className="flex lg:flex-1 gap-4"></div>
      <CreateTaskButton className="justify-self-end" />
      <LogoutButton className="justify-self-end ml-2" />
    </nav>
  );
}
