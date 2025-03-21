import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MenuItemHeader({ item, setMobMenu }) {
  const [hover, setHover] = useState("");
  const navigate = useNavigate();
  function handleClick(nav) {
    if (nav === "") return;
    if (setMobMenu) setMobMenu(false);
    navigate(`/${nav}`);
    setHover(() => false);
  }
  return (
    <div
      className="relative group" // Use 'group' to manage hover behavior better
      onMouseEnter={() => setHover(item.id)}
      onMouseLeave={() => setHover("")}
    >
      {/* Main Menu */}
      <div className="flex gap-1 cursor-pointer justify-end">
        <h4 className="text-sm uppercase font-normal tracking-wide">
          {item.title}
        </h4>
        <RiArrowDropDownLine className="text-xl" />
      </div>

      {/* Submenu - Always Positioned Directly Below */}
      {hover === item.id && (
        <div className="tab:absolute mt-2 tab:mt-0 tab:top-full left-0 space-y-2 bg-gray-800 sm:bg-primary sm:text-secondary w-max rounded-md p-2 z-50">
          {item.subMenu.map((menu, index) => (
            <h4
              key={index}
              onClick={() => handleClick(item.link[index])}
              className="text-sm uppercase font-normal tracking-wide p-2 rounded-md cursor-pointer hover:bg-accentCyan hover:text-primary"
            >
              {menu}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItemHeader;
