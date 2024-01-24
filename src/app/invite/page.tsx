import { getLoggedInUser } from '../../utils/auth';
import { InvitePageProps } from './types';

export default async function Page({ searchParams }: InvitePageProps) {
  const { userEmail, teamId } = searchParams;
  const user = await getLoggedInUser();

  const userTeamId = user?.teamId;
  const userRole = user?.role;

  return (
    <div className="w-screen h-screen bg-green-600 flex items-center justify-center">
      <div className="bg-white w-full sm:w-3/5 lg:w-4/5 xl:w-1/5 border rounded-lg p-4">
        {!userTeamId ? (
          <>no user found</>
        ) : (
          <>
            This is the team invitation page{'\n'}
            the team ID is - {teamId}
            {'\n'}
            The user email is - {userEmail}
            {'\n'}
          </>
        )}
      </div>
    </div>
  );
}
