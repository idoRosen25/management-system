import { Spinner } from '.';

const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-10 flex justify-center items-center">
      <Spinner mode="spinner" />
    </div>
  );
};

export default LoadingSpinner;
