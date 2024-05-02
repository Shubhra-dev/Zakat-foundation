import { ImCalculator } from "react-icons/im";
import MenuItem from "./MenuItem";
import { GoGraph } from "react-icons/go";
import { PiBookOpenBold } from "react-icons/pi";
import { FaSwatchbook } from "react-icons/fa";
import { TbMessage2Question } from "react-icons/tb";
import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";

function CalculateLaoyout({ children, tab }) {
  return (
    <EqualHeightFlexContainer>
      <div className="w-1/6 bg-slate-100 px-10 pt-8 h-full flex-grow">
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
        <MenuItem text={"Knowledge Bank"} active={tab === 4}>
          <FaSwatchbook
            className={`text-2xl ${
              tab === 4 ? "text-primary" : "text-accentRed"
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
      <div className="w-5/6 flex-grow">{children}</div>
    </EqualHeightFlexContainer>
  );
}

export default CalculateLaoyout;
