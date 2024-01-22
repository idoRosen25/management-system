import React, { useState, useEffect } from 'react';
import { twMerge } from 'tailwind-merge';

type AlertProps = {
  message: string;
  type: 'success' | 'error';
  duration?: number; // Optional duration for the alert to stay visible in milliseconds
  isVisible?: boolean; // Prop to control visibility from outside
};

const Alert = ({
  message,
  type,
  duration = 5000,
  isVisible = true,
}: AlertProps) => {
  const [localIsVisible, setLocalIsVisible] = useState(isVisible);

  useEffect(() => {
    // Set a timer to close the alert after the specified duration
    const timer = setTimeout(() => {
      setLocalIsVisible(false);
    }, duration);

    // Cleanup the timer on component unmount or when the alert is closed manually
    return () => clearTimeout(timer);
  }, [duration, localIsVisible]);

  const handleClose = () => {
    setLocalIsVisible(false);
  };

  useEffect(() => {
    // Update local visibility state when the external isVisible prop changes
    setLocalIsVisible(isVisible);
  }, [isVisible]);

  return (
    <div
      className={`flex flex-col gap-3 transition-opacity duration-500 mt-4 ${localIsVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {localIsVisible && (
        <div
          className={`flex bg-white dark:bg-gray-900 items-center px-6 py-4 text-sm border-t-2 rounded-b shadow-sm ${type === 'success' ? 'border-green-500' : 'border-red-500'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={twMerge(
              'h-6 w-6',
              type === 'success' ? 'text-green-500' : 'text-red-500',
            )}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <div className="ml-3">
            <div
              className={`font-bold text-left ${type === 'success' ? 'text-black' : 'text-white'} dark:text-gray-50`}
            >
              {type === 'success' ? 'Success' : 'Error'}
            </div>
            <div
              className={`w-full ${type === 'success' ? 'text-gray-900' : 'text-white'} dark:text-gray-300 mt-1`}
            >
              {message}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
