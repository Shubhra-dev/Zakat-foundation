import MenuItem from "../calculate/MenuItem";
// import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import { RiMailSendFill } from "react-icons/ri";
import { BsFillFileSpreadsheetFill } from "react-icons/bs";
import { PiHouseLine } from "react-icons/pi";
import { IoSchoolSharp } from "react-icons/io5";

function ApplyLayout({ children, tab }) {
  return (
    <div className="sm:h-screen sm:flex">
      <div className="overflow-x-scroll flex sm:block gap-2 sm:w-1/6 bg-slate-100 px-2 tab:px-4 laptop:px-10 pt-3 sm:pt-8 sm:h-full flex-grow sm:overflow-y-scroll scrollbar-hide">
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
      </div>
      <div className="w-full sm:w-5/6 flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default ApplyLayout;
