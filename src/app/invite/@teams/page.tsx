import { Role } from '@prisma/client';
import SignupForm from '../../../components/Auth/SignupForm';
import InviteAdminOwner from '../components/InviteAdminOwner';
import { InvitePageProps } from '../types';

export default async function Page({ searchParams }: InvitePageProps) {
  const { email, teamId, role } = searchParams;
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {teamId && email ? (
        <div className="bg-white rounded-lg p-4">
          <SignupForm teamId={teamId} userEmail={email} role={role} />
        </div>
      ) : email ? (
        <>
          <InviteAdminOwner email={email} role={role || Role.OWNER} />
        </>
      ) : (
        <InviteAdminOwner email={email} role={Role.OWNER} />
      )}
    </div>
  );
}
