function RoundedButton({ children, bg, textColor, padding, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${bg ? bg : "bg-accentRed"} ${
        padding ? padding : "px-6 py-3"
      } ${
        textColor ? textColor : "text-primary"
      } rounded-full cursor-pointer font-bold text-xl shadow-md hover:bg-opacity-60`}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
