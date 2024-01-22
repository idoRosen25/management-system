'use client';
import { ReactNode, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  show: boolean;
  children: ReactNode;
  onBackdrop?: () => void;
  fullScreen?: boolean;
};

const ModalWrapper: React.FC<Props> = ({
  show,
  children,
  onBackdrop,
  fullScreen,
}) => {
  useEffect(() => {
    function onEscClick(e: KeyboardEvent) {
      e.key === 'Escape' && onBackdrop && onBackdrop();
    }

    if (onBackdrop) {
      document.addEventListener('keydown', onEscClick);
      return () => document.removeEventListener('keydown', onEscClick);
    }
  }, [onBackdrop]);

  if (!show) {
    return <></>;
  }
  return (
    <>
      <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
        <div
          className={twMerge(
            'relative bg-white p-4',
            fullScreen
              ? 'w-[95%] h-[90%] m-auto'
              : 'w-[calc(100%-5rem)] md:w-[calc(100%-30rem)] lg:w-fit lg:min-w-[25rem]',
          )}
        >
          {children}
        </div>
      </dialog>
    </>
  );
};

export default ModalWrapper;
