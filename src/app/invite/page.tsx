import { Role } from '@prisma/client';
import InviteAdminOwner from './components/InviteAdminOwner';

export default function Page() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-green-500">
      <InviteAdminOwner role={Role.ADMIN} />
    </div>
  );
}
