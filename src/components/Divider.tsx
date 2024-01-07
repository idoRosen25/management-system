import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};
const Divider = ({ className }: Props) => {
  return (
    <div className={twMerge(className, 'bg-gray-400 h-[1px] w-full')}></div>
  );
};
export default Divider;
