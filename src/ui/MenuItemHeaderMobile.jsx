import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function MenuItemHeaderMobile({ item, activeMenu, setActiveMenu, setMobMenu }) {
  const navigate = useNavigate();

  function handleClickSubMenu(id) {
    setActiveMenu((prev) => (prev === id ? "" : id)); // Close previous, open new
  }

  function handleClick(nav) {
    if (nav === "") return;
    if (setMobMenu) setMobMenu(false);
    navigate(`/${nav}`);
    setActiveMenu(""); // Close submenu after navigation
  }

  return (
    <div className="relative group" onClick={() => handleClickSubMenu(item.id)}>
      {/* Main Menu */}
      <div className="flex gap-1 cursor-pointer justify-end">
        <h4 className="text-sm uppercase font-normal tracking-wide">
          {item.title}
        </h4>
        <RiArrowDropDownLine className="text-xl" />
      </div>

      {/* Submenu - Only One Stays Open */}
      {activeMenu === item.id && (
        <div className="mt-2 top-full left-0 space-y-2 bg-gray-800 sm:bg-primary sm:text-secondary w-max rounded-md p-2 z-50">
          {item.subMenu.map((menu, index) => (
            <h4
              key={index}
              onClick={() => handleClick(item.link[index])}
              className="border-b border-b-secondary text-sm uppercase font-normal tracking-wide p-2 rounded-md cursor-pointer hover:bg-accentCyan hover:text-primary"
            >
              {menu}
            </h4>
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItemHeaderMobile;
