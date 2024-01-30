import { Role } from '@prisma/client';
import InviteAdminOwner from './components/InviteAdminOwner';
import { InvitePageProps } from './types';
import SignupForm from '../../components/Auth/SignupForm';
import { getLoggedInUser } from '../../utils/auth';
import LoginForm from '../../components/Auth/LoginForm';

export default function Page({ searchParams }: InvitePageProps) {
  const { email, teamId, role } = searchParams;
  const user = getLoggedInUser();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-500">
      {user && teamId && email ? (
        <div className="bg-white rounded-lg p-4">
          <LoginForm email={email} />
        </div>
      ) : teamId && email ? (
        <div className="bg-white rounded-lg p-4">
          <SignupForm teamId={teamId} userEmail={email} role={role} />
        </div>
      ) : (
        <InviteAdminOwner role={Role.ADMIN} />
      )}
    </div>
  );
}
