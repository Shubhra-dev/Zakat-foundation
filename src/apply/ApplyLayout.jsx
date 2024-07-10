import MenuItem from "../calculate/MenuItem";
// import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import { RiMailSendFill } from "react-icons/ri";
import { BsFillFileSpreadsheetFill } from "react-icons/bs";
import { PiHouseLine } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

function ApplyLayout({ children, tab }) {
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
    <div ref={containerRef} className="tab:h-screen tab:flex">
      <div
        className={`overflow-x-scroll flex justify-center ${
          stickyMenu
            ? showSecondNav
              ? "fixed w-full m-auto top-[56px] tab:top-0 tab:relative"
              : "fixed w-full m-auto z-50 tab:z-0 top-0 tab:relative"
            : ""
        } tab:block gap-2 sm:gap-4 tab:w-1/6 bg-slate-100/90 tab:bg-slate-100 px-4 tab:px-4 laptop:px-10 pt-3 tab:pt-8 tab:h-full tab:flex-grow tab:overflow-y-scroll scrollbar-hide`}
      >
        <MenuItem text={"Apply"} active={tab === 1} link={"apply_help"}>
          <RiMailSendFill
            className={`text-xl sm:text-2xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Hardship Relief Fund"}
          active={tab === 2}
          link={"hardship_relief"}
        >
          <BsFillFileSpreadsheetFill
            className={`text-xl sm:text-2xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Housing Fund"}
          active={tab === 3}
          link={"housing_fund"}
        >
          <PiHouseLine
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Work & Education Fund"}
          active={tab === 4}
          link={"work_and_education"}
        >
          <IoSchoolSharp
            className={`text-3xl ${
              tab === 4 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <div className="bg-inherit py-[80px] hidden tab:block laptop:hidden"></div>
      </div>
      <div
        ref={contentRef}
        className="w-full h-full tab:w-5/6 tab:flex-grow overflow-y-scroll scrollbar-hide"
      >
        {children}
      </div>
    </div>
  );
}

export default ApplyLayout;
