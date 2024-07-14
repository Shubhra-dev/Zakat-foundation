//import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import MenuItem from "../calculate/MenuItem";
import { PiFlowerBold } from "react-icons/pi";
import { GiRecycle } from "react-icons/gi";
import { TbSunLow } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";
import { useEffect, useRef, useState } from "react";

function ImpactLayout({ children, tab }) {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSecondNav, setShowSecondNav] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const contentRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const container = containerRef.current;

    const handleWheel = (event) => {
      const deltaY = event.deltaY;
      const contentHeight = content.scrollHeight;
      const contentVisibleHeight = content.clientHeight;
      const contentScrollTop = content.scrollTop;

      if (deltaY < 0) {
        // Scrolling up
        if (window.scrollY > 0) {
          // Prevent default scrolling of content
          event.preventDefault();
          // Scroll main page instead
          window.scrollBy(0, deltaY);
        } else if (contentScrollTop > 0) {
          // Allow content to scroll if main page is at the top
          content.scrollBy(0, deltaY);
        }
      } else {
        // Scrolling down
        if (contentScrollTop + contentVisibleHeight < contentHeight) {
          // Allow content to scroll
          content.scrollBy(0, deltaY);
        } else {
          // Prevent default scrolling of content
          event.preventDefault();
          // Scroll main page instead
          window.scrollBy(0, deltaY);
        }
      }
    };

    container.addEventListener("wheel", handleWheel);

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 120); // Adjust the scroll value as needed
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
    <div className="tab:h-screen tab:flex" ref={containerRef}>
      <div
        className={`overflow-x-scroll flex justify-center z-50 tab:z-0 ${
          stickyMenu
            ? showSecondNav
              ? "fixed w-full m-auto top-[56px] tab:top-0 tab:relative"
              : "fixed w-full m-auto tab:z-0 top-0 tab:relative"
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
        <div className="bg-inherit py-[80px] hidden tab:block"></div>
      </div>
      <div
        ref={contentRef}
        className={`w-full h-full tab:w-5/6 tab:flex-grow overflow-y-scroll scrollbar-hide ${
          stickyMenu ? "mt-[120px] tab:mt-0" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default ImpactLayout;
