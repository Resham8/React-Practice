function Button({ disabled, children, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-full max-w-sm py-3 text-blue-500  text-lg font-semibold rounded-lg ${
        disabled ? "bg-blue-300 cursor-not-allowed" : "bg-green-400"
      }`}
    >
      {children}
    </button>
  );
}


export default Button;
