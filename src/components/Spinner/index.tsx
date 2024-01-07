import spinnerSvg from '../../../public/spinner.svg';
import loader from '../../../public/loader.svg';
import { twMerge } from 'tailwind-merge';
import Image from 'next/image';

export interface SpinnerProps {
  className?: string;
  mode?: 'spinner' | 'loader';
  alt?: string;
  width?: number;
  height?: number;
  isFullScreen?: boolean;
}

export const Spinner = ({
  className,
  mode = 'spinner',
  alt,
  width,
  height,
  isFullScreen,
}: SpinnerProps) => {
  const spinner = (
    <div
      className={twMerge(
        'flex items-center justify-center h-full w-full',
        className,
      )}
    >
      <Image
        src={mode === 'spinner' ? spinnerSvg : loader}
        width={width}
        height={height}
        className="animate-spin"
        alt={alt || 'loading'}
      />
    </div>
  );

  return isFullScreen ? (
    <div className="w-full h-full flex items-center justify-center">
      {spinner}
    </div>
  ) : (
    spinner
  );
};
