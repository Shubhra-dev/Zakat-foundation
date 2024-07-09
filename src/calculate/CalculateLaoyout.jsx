import { ImCalculator } from "react-icons/im";
import MenuItem from "./MenuItem";
import { GoGraph } from "react-icons/go";
import { PiBookOpenBold } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
import { useEffect, useState } from "react";

function CalculateLaoyout({ children, tab }) {
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
        <MenuItem text={"Calculator"} active={tab === 1} link={"calculate"}>
          <ImCalculator
            className={`text-2xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Today's Nisab"}
          active={tab === 2}
          link={"todays_nisab"}
        >
          <GoGraph
            className={`text-3xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Zakat Guides"}
          active={tab === 3}
          link={"zakat_guides"}
        >
          <PiBookOpenBold
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Ask a Question"}
          active={tab === 5}
          link={"ask_a_question"}
        >
          <TbMessage2Question
            className={`text-2xl ${
              tab === 5 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <div className="bg-inherit py-[80px] hidden tab:block"></div>
      </div>
      <div className="w-full h-full tab:w-5/6 tab:flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default CalculateLaoyout;
