import Image from 'next/image';
import LinkWrapper from './LinkWrapper';
import { Routes } from '../consts';
import PlatformIcon from '../../public/logo-icon.png';
import { getLoggedInUser } from '@/utils/auth';
import { twMerge } from 'tailwind-merge';

type Props = {
  route: Routes;
};

const routeToTextMapper: { [key: string]: string } = {
  [Routes.DASHBOARD]: 'dashboard',
  [Routes.USER]: 'profile',
};
const Sidebar = ({ route }: Props) => {
  const user = getLoggedInUser();

  return (
    <div
      className="hidden lg:block bg-blue-700 bg-opacity-95 min-w-[15rem] max-w-max max-h-screen"
      aria-modal="true"
    >
      <LinkWrapper
        href={Routes.DASHBOARD}
        className="group flex items-center gap-2 p-4 pb-2 w-fit"
      >
        <Image
          width={40}
          height={40}
          src={PlatformIcon}
          alt="Platform Icon"
          className="rounded-md cursor-pointer"
        />
        <span className="text-lg font-medium group-hover:text-indigo-600">
          OctoManage
        </span>
      </LinkWrapper>

      <div className="flex flex-col mt-4 h-[80%]">
        <div className="h-full flex flex-col gap-4 mx-2">
          {Object.entries(routeToTextMapper)
            .sort(([k1], [k2]) => k1.localeCompare(k2))
            .map(([key, value]) => (
              <LinkWrapper
                key={key}
                href={key}
                className={twMerge(
                  'p-2 rounded-md border border-gray-200 border-opacity-20 shadow-md',
                  key === route
                    ? 'bg-gray-400 bg-opacity-50 text-indigo-600 hover:bg-opacity-90'
                    : 'hover:bg-gray-400 hover:bg-opacity-50 hover:text-indigo-600 ',
                )}
              >
                <span className="text-lg font-medium capitalize">{value}</span>
              </LinkWrapper>
            ))}
        </div>
        <div className="absolute bottom-0 p-5">
          Hello,{' '}
          <span className="font-bold">{user?.fullName || 'anonymous'}</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
