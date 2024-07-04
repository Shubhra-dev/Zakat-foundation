//import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import MenuItem from "../calculate/MenuItem";
import { PiFlowerBold } from "react-icons/pi";
import { GiRecycle } from "react-icons/gi";
import { TbSunLow } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { useEffect, useState } from "react";

function ImpactLayout({ children, tab }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSecondNav, setShowSecondNav] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 80); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY < lastScrollY) {
      setShowSecondNav(true);
    } else {
      setShowSecondNav(false);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="tab:h-screen tab:flex">
      <div
        className={`overflow-x-scroll flex justify-center ${
          stickyMenu
            ? showSecondNav
              ? "fixed w-full m-auto top-[56px] tab:top-0 tab:relative"
              : "fixed w-full m-auto z-50 tab:z-0 top-0 tab:relative"
            : ""
        } tab:block gap-2 sm:gap-4 tab:w-1/6 bg-slate-100/90 tab:bg-slate-100 px-4 tab:px-4 laptop:px-10 pt-3 tab:pt-8 tab:h-full tab:flex-grow tab:overflow-y-scroll scrollbar-hide`}
      >
        <MenuItem text={"Your Impact"} active={tab === 1} link={"your_impact"}>
          <LuHeartHandshake
            className={`text-2xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Impact Stories"}
          active={tab === 2}
          link={"impact_stories"}
        >
          <PiFlowerBold
            className={`text-2xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"How You Help"}
          active={tab === 3}
          link={"how_you_help"}
        >
          <GiRecycle
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem text={"The Need"} active={tab === 4} link={"the_need"}>
          <TbSunLow
            className={`text-3xl ${
              tab === 4 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
      </div>
      <div className="w-full h-full tab:w-5/6 tab:flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default ImpactLayout;
