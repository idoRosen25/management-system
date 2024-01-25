import { Role } from '@prisma/client';
import { getLoggedInUser } from '../../utils/auth';

export default async function Layout(props: {
  children: React.ReactNode;
  teams: React.ReactNode;
  user: React.ReactNode;
}) {
  const user = await getLoggedInUser();
  return (
    <main className="w-screen h-screen grid grid-cols-1">
      {!user
        ? props.children
        : user.role === Role.ADMIN
          ? props.teams
          : props.user}
    </main>
  );
}
