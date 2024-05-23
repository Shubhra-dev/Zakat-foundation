function Title({ children, textColor }) {
  return (
    <h1
      className={`${
        textColor ? textColor : "text-primary"
      } font-pally text-[70px] leading-tight font-bold`}
    >
      {children}
    </h1>
  );
}

export default Title;
