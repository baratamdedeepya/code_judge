const Input = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
    />
  );
};

export default Input;