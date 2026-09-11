import Badge from "../atoms/Badge";

const ProblemRow = ({ problem }) => {
  return (
    <div className="grid grid-cols-[50px_1fr_130px_40px] gap-5 items-center px-6 py-5 border-b border-gray-200 hover:bg-gray-50 transition">

    
      <div className="text-gray-500 font-medium">
        {problem.id}
      </div>

      
      <div>
        <h3 className="text-lg font-semibold text-gray-800">
          {problem.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {problem.description}
        </p>

        
        <div className="flex gap-2 mt-3 flex-wrap">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      
      <div>
        <Badge type={problem.difficulty.toLowerCase()}>
          {problem.difficulty}
        </Badge>
      </div>

      
      <div className="text-gray-400 text-xl">
        →
      </div>

    </div>
  );
};

export default ProblemRow;