//import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import MenuItem from "../calculate/MenuItem";
import { PiFlowerBold } from "react-icons/pi";
import { GiRecycle } from "react-icons/gi";
import { TbSunLow } from "react-icons/tb";
import { LuHeartHandshake } from "react-icons/lu";

function ImpactLayout({ children, tab }) {
  return (
    <div className="sm:h-screen sm:flex">
      <div className="overflow-x-scroll flex sm:block gap-2 sm:w-1/6 bg-slate-100 px-2 tab:px-4 laptop:px-10 pt-3 sm:pt-8 sm:h-full flex-grow sm:overflow-y-scroll scrollbar-hide">
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
      <div className="w-full h-full sm:w-5/6 sm:flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
}

export default ImpactLayout;
