import Link from 'next/link';
import { Routes } from '../../consts';
import { getLoggedInUser } from '../../utils/auth';

export default async function Page() {
  const user = await getLoggedInUser();
  return (
    <div className="bg-blue-700 bg-opacity-60 border-black border-l">
      <h1>This is user page</h1>
      <Link href={`${Routes.INVITE}?teamId=${user?.teamId}`}>
        Click here to open modal
      </Link>
    </div>
  );
}
