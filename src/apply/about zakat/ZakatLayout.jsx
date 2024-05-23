import { TbInfoOctagon, TbSettingsQuestion } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import MenuItem from "../../calculate/MenuItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import { PiTargetBold } from "react-icons/pi";

function ZakatLayout({ children, tab }) {
  return (
    <EqualHeightFlexContainer addedClass={"h-screen"}>
      <div className="w-1/6 bg-slate-100 px-10 pt-8 h-full flex-grow overflow-y-scroll scrollbar-hide">
        <MenuItem text={"About Zakat"} active={tab === 1} link={"about_zakat"}>
          <TbInfoOctagon
            className={`text-2xl ${
              tab === 1 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"Purpose of Zakat"}
          active={tab === 2}
          link={"zakat_purpose"}
        >
          <TbSettingsQuestion
            className={`text-2xl ${
              tab === 2 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem
          text={"How Zakat Works"}
          active={tab === 3}
          link={"how_it_works"}
        >
          <PiTargetBold
            className={`text-3xl ${
              tab === 3 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
        <MenuItem text={"Community Hub"} active={tab === 4} link={""}>
          <GoPeople
            className={`text-3xl ${
              tab === 4 ? "text-primary" : "text-accentRed"
            }`}
          />
        </MenuItem>
      </div>
      <div className="w-5/6 flex-grow overflow-y-scroll scrollbar-hide">
        {children}
      </div>
    </EqualHeightFlexContainer>
  );
}

export default ZakatLayout;
