const LoadingSpinner = () => {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen bg-white bg-opacity-50 z-10 flex justify-center items-center">
      <div className="flex space-x-2 justify-center items-center h-screen dark:invert">
        <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
