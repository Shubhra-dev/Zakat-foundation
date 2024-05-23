function Button({ children, bg, textColor, padding }) {
  return (
    <button
      className={`${bg ? bg : "bg-primary"} ${
        padding ? padding : "px-5 py-2"
      } rounded-md ${
        textColor ? textColor : "text-primary"
      } capitalize text-center text-lg font-semibold cursor-pointer hover:bg-opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;
