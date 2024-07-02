function H2({ textColor, add, font, children, align }) {
  return (
    <h2
      className={`text-h4 ${align ? align : "text-center"} sm:text-h2 ${
        font ? font : ""
      } leading-tight font-bold ${textColor ? textColor : "text-primary"} ${
        add ? add : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default H2;
