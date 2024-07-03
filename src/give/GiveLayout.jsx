// import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaHandHoldingMedical } from "react-icons/fa";
// import { FaMoneyBills } from "react-icons/fa6";
import { TbLocationQuestion } from "react-icons/tb";

import MenuItem from "../calculate/MenuItem";

function GiveLayout({ children, tab }) {
  return (
    <div className="tab:h-screen tab:flex">
      <div className="overflow-x-scroll flex items-cente justify-center tab:block gap-2 sm:gap-4 tab:w-1/6 bg-slate-100 px-2 tab:px-4 laptop:px-10 pt-3 tab:pt-8 tab:h-full tab:flex-grow tab:overflow-y-scroll scrollbar-hide">
        <MenuItem text={"Give Zakat"} active={tab === 1} link={"give_zakat"}>
          <FaHandHoldingDollar
            className={`text-3xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Give Sadaqah"}
          active={tab === 2}
          link={"give_sadaqah"}
        >
          <FaHandHoldingMedical
            className={`text-3xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        {/* <MenuItem text={"Give by Bank & Chaque"} active={tab === 3}>
          <FaMoneyBills
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem> */}
        <MenuItem text={"Giving FAQ's"} active={tab === 4} link={"giving_faq"}>
          <TbLocationQuestion
            className={`text-2xl ${
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

export default GiveLayout;
