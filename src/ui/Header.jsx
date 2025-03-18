import Button from "./Button";
import logo from "../assets/logo.png";
import MenuItemHeader from "./MenuItemHeader";
import { useNavigate } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import MenuItemHeaderMobile from "./MenuItemHeaderMobile";
const menu = [
  {
    id: "1",
    title: "calculate",
    subMenu: ["calculator", "today's nisab", "zakat guides", "ask a question"],
    link: ["calculate", "todays_nisab", "zakat_guides", "ask_a_question"],
  },
  {
    id: "2",
    title: "give",
    subMenu: ["give zakat", "give sadaqah", "giving faq's"],
    link: ["give_zakat", "give_sadaqah", "giving_faq"],
  },
  {
    id: "3",
    title: "your impact",
    subMenu: ["your impact", "impact stories", "how you help", "the need"],
    link: ["your_impact", "impact_stories", "how_you_help", "the_need"],
  },
  {
    id: "4",
    title: "apply",
    subMenu: [
      "apply for help",
      "hardship relief fund",
      "housing fund",
      "work & education fund",
    ],
    link: [
      "apply_help",
      "hardship_relief",
      "housing_fund",
      "work_and_education",
    ],
  },
  {
    id: "5",
    title: "about zakat",
    subMenu: ["about zakat", "purpose of zakat", "how zakat works"],
    link: ["about_zakat", "zakat_purpose", "how_it_works"],
  },
];
function Header() {
  const navigate = useNavigate();
  const menuRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState("");
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setStickyMenu(window.scrollY > 100); // Adjust the scroll value as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function handleClick(link) {
    setMobMenuOpen(false);
    navigate(`/${link}`);
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <div
        className={`w-full h-[65px] tab:h-[88px] bg-primary ${
          stickyMenu ? "fixed shadow-md top-0" : "-top-[65px] tab:-top-[88px]"
        } left-0 z-20 transition-top duration-500 ease-in-out`}
      >
        <div className="w-full px-4 laptop:px-0 laptop:w-11/12 large:w-5/6 large:m-auto h-full m-auto flex justify-between items-center text-primary">
          <div className="w-1/5 ">
            <img
              src={logo}
              alt="logo"
              className="tab:h-[45px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="hidden tab:flex w-[75%] laptop:w-3/5  justify-between items-center text-secondary leading-tight">
            {menu.map((item) => (
              <MenuItemHeader item={item} key={item.id} />
            ))}
            <div className="cursor-pointer">
              <h4
                onClick={() => navigate("/contact")}
                className="text-sm uppercase font-normal tracking-wide hover:text-accentCyan"
              >
                Contact Us
              </h4>
            </div>
            <Button
              bg={"bg-accentCyan"}
              onClick={() => navigate("/zakat/give")}
            >
              give zakat
            </Button>
          </div>
          <div
            className="tab:hidden cursor-pointer"
            onClick={() => setMobMenuOpen(true)}
          >
            <MdOutlineMenu className="text-3xl text-secondary" />
          </div>
        </div>
      </div>
      {mobMenuOpen && (
        <div
          ref={menuRef}
          className="fixed overflow-y-scroll w-3/5 sm:w-2/5 top-0 right-0 h-screen z-[100] bg-gray-900"
        >
          <div className="p-3" onClick={() => setMobMenuOpen(false)}>
            <MdClose className="text-3xl text-primary" />
          </div>
          <div className="flex flex-col gap-6 w-full justify-between items-end px-6 py-4 text-primary leading-tight">
            {menu.map((item) => (
              <MenuItemHeaderMobile
                item={item}
                key={item.id}
                setMobMenu={setMobMenuOpen}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
              />
            ))}
            <div className="cursor-pointer">
              <h4
                onClick={() => handleClick("contact")}
                className="text-sm uppercase font-normal tracking-wide hover:text-accentCyan"
              >
                Contact Us
              </h4>
            </div>
            <Button
              bg={"bg-accentCyan"}
              onClick={() => handleClick("zakat/give")}
            >
              give zakat
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
