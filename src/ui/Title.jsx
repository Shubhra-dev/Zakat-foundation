function Title({ children, textColor, add }) {
  return (
    <h1
      className={`${
        textColor ? textColor : "text-primary"
      } font-pally text-[70px] leading-tight font-bold ${add ? add : ""}`}
    >
      {children}
    </h1>
  );
}

export default Title;
