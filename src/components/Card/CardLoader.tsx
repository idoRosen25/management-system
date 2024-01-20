const CardLoader = () => {
  return (
    <div className="bg-white">
      <header className="bg-gray-300 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="animate-pulse flex items-center space-x-4">
            <div className="h-12 w-12 bg-gray-400 rounded-full"></div>
            <div>
              <div className="h-4 w-20 bg-gray-400 rounded"></div>
              <div className="h-4 w-16 bg-gray-400 rounded mt-2"></div>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse space-y-4 mt-4">
          <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};
export default CardLoader;
