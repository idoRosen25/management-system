import SignupForm from '../../../components/Auth/SignupForm';
import { InvitePageProps } from '../types';

export default async function Page({ searchParams }: InvitePageProps) {
  const { email, teamId, role } = searchParams;
  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-600">
      <div className="bg-white rounded-lg w-1/2 p-4">
        <SignupForm teamId={teamId} userEmail={email} role={role} />
      </div>
    </div>
  );
}
