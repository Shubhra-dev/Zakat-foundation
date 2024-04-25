import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import CalculateLaoyout from "../CalculateLaoyout";
import NisabHero from "./NisabHero";
import TodaysNisab from "./TodaysNisab";
import nisabQues from "../../assets/nisabQues.png";
import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";

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
            <div className="px-3 border border-gray-200 py-4 shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center cursor-pointer">
              <div className="rounded-full w-max p-2 bg-secondary/20 text-2xl text-accentRed">
                <FaAngleDoubleRight className="text-xl" />
              </div>
              <h3 className="text-3xl font-semibold text-secondary px-4">
                What is Nisab?
              </h3>
            </div>
            <div className="px-3 bg-accentRed border border-gray-200 py-4 shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center cursor-pointer">
              <div className="rounded-full w-max p-2 bg-primary text-2xl text-accentRed">
                <FaAngleDoubleUp className="text-xl" />
              </div>
              <div className="px-4 text-primary">
                <h3 className="text-3xl font-semibold pb-2">What is Nisab?</h3>
                <p className="font-normal text-sm">
                  The Nisab was set by the Prophet Muhammad (peace be upon him)
                  at a rate equivalent to87.48 grams of gold and 612.36 grams of
                  silver (85 grams of gold and 595 grams of silver according is
                  another opinion).
                </p>
              </div>
            </div>
          </div>
        </EqualHeightFlexContainer>
      </div>
    </CalculateLaoyout>
  );
}

export default Nisab;
