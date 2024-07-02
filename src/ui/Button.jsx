function Button({ children, bg, textColor, padding, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${bg ? bg : "bg-primary"} ${
        padding ? padding : "px-5 py-2"
      } rounded-md ${
        textColor ? textColor : "text-primary"
      } capitalize text-center text-small sm:text-s3 tab:text-paragraph font-semibold cursor-pointer hover:bg-opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;
