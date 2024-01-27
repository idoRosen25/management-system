'use client';
import { Routes } from '@/consts';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const InviteUserButton = ({ className = '' }: { className?: string }) => {
  const router = useRouter();
  const onCLick = () => {
    router.replace(Routes.INVITE);
  };
  return (
    <Link
      href={Routes.INVITE}
      className="ml-2 row-start-2 row-end-2 col-start-2 col-end-2 hidden bg-indigo-600 xl:flex justify-self-end self-end h-fit w-fit text-indigo-900 font-bold text-xs border border-indigo-700 rounded-full py-0.5 px-1 cursor-pointer"
    >
      <span className="flex items-center jusity-center">{'+'}</span>
    </Link>
  );
};

export default InviteUserButton;
