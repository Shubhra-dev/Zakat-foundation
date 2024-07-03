import { ImCalculator } from "react-icons/im";
import MenuItem from "./MenuItem";
import { GoGraph } from "react-icons/go";
import { PiBookOpenBold } from "react-icons/pi";
import { TbMessage2Question } from "react-icons/tb";
// import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";

function CalculateLaoyout({ children, tab }) {
  return (
    <div className="tab:h-screen tab:flex">
      <div className="overflow-x-scroll flex items-cente justify-center tab:block gap-2 sm:gap-4 tab:w-1/6 bg-slate-100 px-2 tab:px-4 laptop:px-10 pt-3 tab:pt-8 tab:h-full tab:flex-grow tab:overflow-y-scroll scrollbar-hide">
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
      </div>
      <div className="w-full h-full tab:w-5/6 tab:flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default CalculateLaoyout;
