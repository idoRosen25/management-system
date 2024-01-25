import { Role } from '@prisma/client';
import { twMerge } from 'tailwind-merge';

type Props = {
  teamId: string;
};
const InviteUser: React.FC<Props> = ({ teamId }) => {
  return (
    <div className={twMerge('w-full bg-white rounded-lg p-4')}>
      <h6 className="text-2xl font-medium">Invite user</h6>
      <div className="w-full bg-gray-300 h-0.5 my-1 rounded-full" />
      <form method="POST" action={'/api/invite'}>
        <div className="flex flex-col gap-4 mt-2 w-full lg:w-4/5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              User email
            </label>
            <input
              id="email"
              name="email"
              placeholder="User Email"
              className="border border-gray-400 rounded-md py-1 px-2 text-sm"
              type="text"
            />
          </div>
          <div className="hidden">
            <label htmlFor="teamId" className="text-sm font-medium">
              Team ID
            </label>
            <input
              placeholder="Team ID"
              readOnly
              value={teamId}
              id="teamId"
              name="teamId"
              type="text"
              className="border border-gray-400 rounded-md py-1 px-2 text-sm"
            />
          </div>
        </div>
        <div className="hidden">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <input
            placeholder="Role"
            readOnly
            id="role"
            name="role"
            value={Role.USER}
            type="text"
            className="border border-gray-400 rounded-md py-1 px-2 text-sm"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-fit px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InviteUser;
