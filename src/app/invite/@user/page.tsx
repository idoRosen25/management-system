import { Role } from '@prisma/client';
import SignupForm from '../../../components/Auth/SignupForm';
import { getLoggedInUser } from '../../../utils/auth';
import { pauseExecution } from '../../../utils/axios';
import { InvitePageProps } from '../types';
import InviteUser from '../components/InviteUser';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 min-w-[40%]">{children}</div>
    </div>
  );
};
export default async function Page({ searchParams }: InvitePageProps) {
  const { email, teamId, role } = searchParams;
  const user = await getLoggedInUser();

  if (user?.role === Role.USER) {
    return <Wrapper>Please contact admin for invite</Wrapper>;
  }

  if (!(email && teamId)) {
    if ([role, user?.role].includes(Role.USER) || !user?.teamId) {
      return <Wrapper>Please contact admin for invite</Wrapper>;
    }
    return (
      <Wrapper>
        <InviteUser teamId={teamId} />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <SignupForm teamId={teamId} userEmail={email} role={role || Role.USER} />
    </Wrapper>
  );
}
