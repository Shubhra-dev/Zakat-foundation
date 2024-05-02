import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function MenuItemHeader({ item }) {
  const [hover, setHover] = useState("");
  const navigate = useNavigate();
  function handleClick(nav) {
    if (nav === "") return;
    navigate(`/${nav}`);
  }
  return (
    <div
      className="relative"
      onMouseEnter={() => setHover(item.id)}
      onMouseLeave={() => setHover("")}
    >
      <div className="flex gap-1 cursor-pointer items-center">
        <h4 className="text-sm uppercase font-normal tracking-wide">
          {item.title}
        </h4>
        <RiArrowDropDownLine className="text-xl" />
      </div>
      {hover === item.id && (
        <div className="absolute bg-primary text-secondary w-max rounded-md p-2">
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
