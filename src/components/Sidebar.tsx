import Image from 'next/image';
import LinkWrapper from './LinkWrapper';
import { Routes } from '../consts';
import PlatformIcon from '../../public/logo-icon.png';

const Sidebar = () => {
  return (
    <div
      className="hidden lg:block bg-green-400 min-w-[15rem] max-w-max"
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
    </div>
  );
};

export default Sidebar;
