export default function P({ children, textColor, p, add }) {
  return (
    <p
      className={`text-paragraph font-nomal ${
        textColor ? textColor : "text-secondary/80"
      } ${p ? p : "pb-[3%]"} ${add ? add : ""}`}
    >
      {children}
    </p>
  );
}
