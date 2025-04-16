function Input({ type, placeholder }) {
  return (
    <span className="w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-blue-500 outline-none placeholder-white placeholder-opacity-70 text-white px-4 py-3 text-base rounded-lg"
      />
    </span>
  );
}

export default Input