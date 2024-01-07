import { twJoin, twMerge } from 'tailwind-merge';
import { Spinner } from './Spinner';

type ButtonProps = {
  className?: string;
  disabled?: boolean;
  text: string;
  onClick: () => void;
  color?: ButtonColor;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
};

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type ButtonColor = 'primary' | 'danger' | 'secondary' | 'white';
type ButtonVariant = 'contain' | 'outline' | 'text';

const getButtonTheme = ({
  variant,
  color,
}: Pick<ButtonProps, 'color' | 'variant'>) => {
  if (color === 'white') {
    return 'bg-white border-gray-200 aria-expanded:bg-gray-50 hover:bg-gray-50 disabled:text-gray-300 disabled:bg-white text-zinc-700 shadow-none border ';
  }

  if (color === 'primary') {
    if (variant === 'contain') {
      return 'bg-indigo-600 aria-expanded:bg-indigo-700 hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400 text-white';
    }
    if (variant === 'outline') {
      return `border
      border-indigo-600
      bg-white
      text-indigo-600
      aria-expanded:bg-indigo-600
      aria-expanded:text-white
      hover:bg-indigo-600
      hover:text-white
      disabled:border-2
      disabled:hover:bg-white
      disabled:border-gray-200
      disabled:bg-white
      disabled:text-gray-300`;
    }
    if (variant === 'text') {
      return 'text-indigo-600 hover:text-indigo-500';
    }
  }

  if (color === 'secondary') {
    return 'bg-zinc-800 aria-expanded:bg-gray-600 hover:bg-gray-600 disabled:bg-zinc-800 disabled:text-gray-600 text-white border-zinc-700';
  }

  if (color === 'danger') {
    if (variant === 'contain') {
      return ' bg-red-500 hover:bg-red-600 disabled:bg-gray-200 disabled:text-gray-400 text-white';
    }

    if (variant === 'outline') {
      return 'bg-white text-red-500 hover:bg-red-700 hover:text-white border border-red-600 disabled:border-2 disabled:hover:bg-white disabled:border-gray-200 disabled:bg-white disabled:text-gray-300';
    }
  }
};

const textSizesMap = {
  xs: 'text-[12px] leading-4',
  sm: 'text-sm',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-base',
};

const heightsMap = {
  xs: 'h-[32px]',
  sm: 'h-[38px]',
  md: 'h-[42px]',
  lg: 'h-[48px]',
  xl: 'h-[52px]',
};

export default function Button({
  className,
  disabled,
  text,
  onClick,
  color = 'primary',
  variant = 'contain',
  isLoading,
  size = 'md',
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-lg focus:outline-none transition disabled:cursor-not-allowed font-medium relative',
        getButtonTheme({ color, variant }),
        {
          xs: 'px-3 py-2',
          sm: 'px-3 py-2.5',
          md: 'px-5 py-3',
          lg: 'px-5 py-4',
          xl: 'px-6 py-4',
        }[size],
        heightsMap[size],
        textSizesMap[size],
        className,
      )}
      disabled={disabled}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick();
      }}
    >
      {isLoading && (
        <Spinner
          className={twJoin(
            'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
            {
              xs: 'w-3 h-3',
              sm: 'w-3 h-3',
              md: 'w-4 h-4',
              lg: 'w-4 h-4',
              xl: 'w-5 h-5',
            }[size],
          )}
          mode="loader"
        />
      )}
      <span className={twMerge(isLoading ? 'opacity-0' : 'opacity-100')}>
        {text}
      </span>
    </button>
  );
}
