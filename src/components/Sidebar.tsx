import Image from 'next/image';
import LinkWrapper from './LinkWrapper';
import { Routes } from '../consts';
import PlatformIcon from '../../public/logo-icon.png';

const Sidebar = () => {
  return (
    <div
      className="hidden lg:block bg-green-400 min-w-[15rem] max-w-max max-h-screen"
      aria-modal="true"
    >
      <LinkWrapper
        href={Routes.DASHBOARD}
        className="flex items-center gap-2 p-4"
      >
        <Image
          width={40}
          height={40}
          src={PlatformIcon}
          alt="Platform Icon"
          className="rounded-md cursor-pointer"
        />
        <span className="text-lg font-medium">OctoManage</span>
      </LinkWrapper>

      <div
        className="
      border-b border-black w-full h-0.5 my-1.5"
      />

      <div className="flex flex-col gap-2">
        <LinkWrapper href={Routes.USER} className="flex items-center gap-2 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-medium">Profile</span>
        </LinkWrapper>
        <LinkWrapper
          href={Routes.DASHBOARD}
          className="flex items-center gap-2 p-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-900"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              fill="#fff"
              d="M12 14l9-5-9-5-9 5 9 5z"
              stroke="#374151"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-lg font-medium">Dashboard</span>
        </LinkWrapper>
      </div>
    </div>
  );
};

export default Sidebar;
