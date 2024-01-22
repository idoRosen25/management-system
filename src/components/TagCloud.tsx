const TagCloud = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Tag Cloud</h2>
        <div className="flex flex-wrap gap-2 cursor-default">
          <div className="bg-blue-200 py-1 px-2 rounded-lg text-sm">
            Technology
          </div>
          <div className="bg-green-200 py-1 px-2 rounded-lg text-sm">
            Programming
          </div>
          <div className="bg-yellow-200 py-1 px-2 rounded-lg text-sm">
            Web Development
          </div>
          <div className="bg-indigo-200 py-1 px-2 rounded-lg text-sm">
            Design
          </div>
          <div className="bg-purple-200 py-1 px-2 rounded-lg text-sm">AI</div>
          <div className="bg-pink-200 py-1 px-2 rounded-lg text-sm">
            Machine Learning
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagCloud;
