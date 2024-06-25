import CalculateLaoyout from "../CalculateLaoyout";
import NisabHero from "./NisabHero";
import NisabQuestions from "./NisabQuestions";
import TodaysNisab from "./TodaysNisab";

function Nisab() {
  return (
    <CalculateLaoyout tab={2}>
      <NisabHero />
      <div className="text-center">
        <h3 className="uppercase text-secondary/80 text-small sm:text-s2 font-normal py-2 sm:py-[4%]">
          nisab essentials
        </h3>
        <h2 className="text-secondary font-bold text-h3 sm:text-title font-pally pb-2 sm:pb-4">
          What is Nisab?
        </h2>
        <p className="w-5/6 sm:w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
          Zakat is a compulsory act of worship that requires Muslims, at or
          above a certain wealth threshold, to donate a portion of that wealth,
          typically 2.5%, to those who are eligible. This threshold is called
          the Nisab (sometimes also spelled niṣāb).
        </p>
      </div>
      <TodaysNisab />
      <NisabQuestions />
    </CalculateLaoyout>
  );
}

export default Nisab;
