function H1({ textColor, add, font, children }) {
  return (
    <h1
      className={`text-h3 tab:text-title ${font ? font : ""} font-bold ${
        textColor ? textColor : "text-primary"
      } ${add ? add : ""}`}
    >
      {children}
    </h1>
  );
}

export default H1;
