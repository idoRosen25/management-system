import { Role } from '@prisma/client';
import { twMerge } from 'tailwind-merge';

const InviteAdminOwner = ({ email, role }: { email?: string; role: Role }) => {
  return (
    <div
      className={twMerge(
        'w-3/5 bg-white rounded-lg p-4',
        role === Role.ADMIN ? 'sm:w-2/5 xl:w-1/5' : '',
      )}
    >
      <h6 className="text-2xl font-medium">Create team {role.toLowerCase()}</h6>
      <div className="w-full bg-gray-300 h-0.5 my-1 rounded-full" />
      <form method="POST" action={'/api/invite'}>
        <div className="flex flex-col gap-4 mt-2 w-full lg:w-3/5">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">
              Team {role.toLowerCase()} email
            </label>
            <input
              id="email"
              name="email"
              placeholder={`${role.toLowerCase()} Email`}
              className="border border-gray-400 rounded-md py-1 px-2 text-sm"
              type="text"
              {...(email ? { readOnly: true, value: email } : {})}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">
              Team name
            </label>
            <input
              placeholder="Team Name"
              id="name"
              name="name"
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
            value={role}
            type="text"
            className="border border-gray-400 rounded-md py-1 px-2 text-sm"
          />
        </div>

        <button
          type="submit"
          name="createTeam"
          className="mt-6 w-fit px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-800 text-white font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default InviteAdminOwner;
