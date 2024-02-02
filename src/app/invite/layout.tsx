import { Role } from '@prisma/client';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Routes } from '@/consts';
import { getLoggedInUser } from '../../utils/auth';

export default async function Layout(props: {
  children: React.ReactNode;
  teams: React.ReactNode;
  user: React.ReactNode;
}) {
  const user = getLoggedInUser();

  return (
    <div className="flex overflow-y-hidden no-scrollbar">
      <Sidebar route={Routes.INVITE} />
      <div className="w-full">
        <Header />
        <main className="w-screen h-screen flex gap-4 bg-blue-700 bg-opacity-60 items-center justify-center border-black border-l">
          {!user ? (
            props.children
          ) : user.role === Role.ADMIN ? (
            <div className="w-full h-full divide-x-1 flex flex-col lg:flex-row">
              {props.teams}
              {!!user?.teamId && (
                <>
                  <div className="w-full h-2 lg:h-full lg:w-1 bg-gray-700" />
                  {props.user}
                </>
              )}
            </div>
          ) : user.role === Role.OWNER ? (
            props.user
          ) : (
            <span className="bg-white rounded-lg p-4">
              Only Admins and Owners can invite to team.
            </span>
          )}
        </main>
      </div>
    </div>
  );
}
