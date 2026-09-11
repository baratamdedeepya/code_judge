const Badge = ({ children, type }) => {

  const styles = {
    easy: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    hard: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-4 py-1.5 rounded-full text-sm font-medium ${
        styles[type]
      }`}
    >
      {children}
    </span>
  );
};

export default Badge;