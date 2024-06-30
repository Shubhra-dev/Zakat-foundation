import Button from "./Button";
import logo from "../assets/logo.png";
import MenuItemHeader from "./MenuItemHeader";
import { useNavigate } from "react-router-dom";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { useState } from "react";
const menu = [
  {
    id: "1",
    title: "calculate",
    subMenu: [
      "calculator",
      "today's nisab",
      "zakat guides",
      "knowledge bank",
      "ask a question",
    ],
    link: ["calculate", "todays_nisab", "zakat_guides", "", "ask_a_question"],
  },
  {
    id: "2",
    title: "give",
    subMenu: [
      "give zakat",
      "give sadaqah",
      "give by bank & check",
      "giving faq's",
    ],
    link: ["give_zakat", "give_sadaqah", "", "giving_faq"],
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
    subMenu: [
      "aboout zakat",
      "purpose of zakat",
      "how zakat works",
      "community hub",
    ],
    link: ["about_zakat", "zakat_purpose", "how_it_works", ""],
  },
];
function Header() {
  const navigate = useNavigate();
  const [mobMenuOpen, setMobMenuOpen] = useState(false);
  return (
    <>
      <div className="w-full h-[88px] bg-gray-900 fixed top-0 left-0 z-20">
        <div className="w-11/12 large:w-5/6 large:m-auto h-full m-auto flex justify-between items-center text-primary">
          <div className="w-1/5 ">
            <img
              src={logo}
              alt="logo"
              className="h-[65px] cursor-pointer"
              onClick={() => navigate("/")}
            />
          </div>
          <div className="hidden sm:flex w-4/5 laptop:w-3/5  justify-between items-center text-primary leading-tight">
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
            <Button bg={"bg-accentCyan"}>give zakat</Button>
          </div>
          <div
            className="sm:hidden cursor-pointer"
            onClick={() => setMobMenuOpen(true)}
          >
            <MdOutlineMenu className="text-3xl" />
          </div>
        </div>
      </div>
      {mobMenuOpen && (
        <div className="fixed w-3/5 top-0 right-0 h-screen z-50 bg-gray-900">
          <div className="p-3" onClick={() => setMobMenuOpen(false)}>
            <MdClose className="text-3xl text-primary" />
          </div>
          <div className="flex flex-col gap-6 w-full justify-between items-end px-6 py-4 text-primary leading-tight">
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
            <Button bg={"bg-accentCyan"}>give zakat</Button>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
