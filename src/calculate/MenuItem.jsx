import { useNavigate } from "react-router-dom";

function MenuItem({ text, active, children, link }) {
  const navigate = useNavigate();
  function handleClick() {
    if (!link) return;
    navigate(`/${link}`);
  }
  return (
    <div
      onClick={handleClick}
      className={`flex flex-col  justify-center items-center ${
        active
          ? "bg-accentCyan text-primary font-semibold"
          : "bg-primary text-secondary shadow-sm font-medium hover:bg-accentCyan hover:text-primary"
      } rounded-xl p-2 sm:py-8 sm:px-4 text-center cursor-pointer mb-3 sm:mb-[10%]`}
    >
      {children}
      <h2 className="text-light sm:text-s2 px-2 sm:px-0 pt-2">{text}</h2>
    </div>
  );
}

export default MenuItem;
