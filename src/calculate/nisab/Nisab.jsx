import CalculateLaoyout from "../CalculateLaoyout";
import NisabHero from "./NisabHero";
import NisabQuestions from "./NisabQuestions";
import TodaysNisab from "./TodaysNisab";

function Nisab() {
  return (
    <CalculateLaoyout tab={2}>
      <NisabHero />
      <div className="text-center">
        <h3 className="uppercase text-secondary/80 text-xl font-normal py-[4%]">
          nisab essentials
        </h3>
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
      <NisabQuestions />
    </CalculateLaoyout>
  );
}

export default Nisab;
