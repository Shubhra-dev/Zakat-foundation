function RoundedButton({ children, bg, textColor, padding }) {
  return (
    <button
      className={`${bg ? bg : "bg-accentRed"} ${
        padding ? padding : " px-6 py-3"
      } ${
        textColor ? textColor : "text-primary"
      } rounded-full font-bold text-xl shadow-md`}
    >
      {children}
    </button>
  );
}

export default RoundedButton;
