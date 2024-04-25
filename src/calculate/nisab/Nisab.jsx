import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import CalculateLaoyout from "../CalculateLaoyout";
import NisabHero from "./NisabHero";
import TodaysNisab from "./TodaysNisab";
import nisabQues from "../../assets/nisabQues.png";

function Nisab() {
  return (
    <CalculateLaoyout tab={2}>
      <NisabHero />
      <div className="py-10 text-center">
        <h2 className="text-secondary font-semibold text-[55px] font-pally pb-4">
          What is Nisab?
        </h2>
        <p className="w-3/5 m-auto font-normal text-xl text-secondary/80 pb-6">
          Zakat is a compulsory act of worship that requires Muslims, at or
          above a certain wealth threshold, to donate a portion of that wealth,
          typically 2.5%, to those who are eligible. This threshold is called
          the Nisab (sometimes also spelled niṣāb).
        </p>
      </div>
      <TodaysNisab />
      <div className="px-[3%] pt-[5%]">
        <EqualHeightFlexContainer>
          <div className="w-1/3 rounded-md">
            <img
              src={nisabQues}
              alt="question mark"
              className="w-full object-fit h-full"
            />
          </div>
          <div className="w-2/3 pl-[3%]">
            <h2 className="text-secondary font-semibold text-6xl font-pally pb-4">
              Nisab Related Questions
            </h2>
          </div>
        </EqualHeightFlexContainer>
      </div>
    </CalculateLaoyout>
  );
}

export default Nisab;
