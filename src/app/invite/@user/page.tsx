import { Role } from '@prisma/client';
import SignupForm from '../../../components/Auth/SignupForm';
import { getLoggedInUser } from '../../../utils/auth';
import { pauseExecution } from '../../../utils/axios';
import { InvitePageProps } from '../types';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-green-600">
      <div className="w-1/2 bg-blue-600">{children}</div>
    </div>
  );
};
export default async function Page({ searchParams }: InvitePageProps) {
  const { email, teamId, role } = searchParams;
  const user = await getLoggedInUser();

  if (!(email && teamId)) {
    if (!user?.teamId) {
      return <Wrapper>Please contact admin for invite</Wrapper>;
    }
    return <Wrapper>This should be the user invite page</Wrapper>;
  }

  return (
    <Wrapper>
      <SignupForm teamId={teamId} userEmail={email} role={role || Role.USER} />
    </Wrapper>
  );
}
