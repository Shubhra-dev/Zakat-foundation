function H2({ textColor, add, font, children }) {
  return (
    <h2
      className={`text-[43px] ${font ? font : ""} leading-tight font-bold ${
        textColor ? textColor : "text-primary"
      } ${add ? add : ""}`}
    >
      {children}
    </h2>
  );
}

export default H2;
