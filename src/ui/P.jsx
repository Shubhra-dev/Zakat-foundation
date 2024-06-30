export default function P({ children, textColor, p, add }) {
  return (
    <p
      className={`text-s3 sm:text-paragraph font-normal ${
        textColor ? textColor : "text-secondary/80"
      } ${p ? p : "pb-[3%]"} ${add ? add : ""}`}
    >
      {children}
    </p>
  );
}
