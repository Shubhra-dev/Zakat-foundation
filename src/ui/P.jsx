export default function P({ children, textColor, p }) {
  return (
    <p
      className={`text-paragraph font-nomal ${
        textColor ? textColor : "text-secondary/80"
      } ${p ? p : "pb-[3%]"}`}
    >
      {children}
    </p>
  );
}
