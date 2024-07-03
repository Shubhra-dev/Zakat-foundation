import CalculateLaoyout from "../CalculateLaoyout";
import NisabHero from "./NisabHero";
import NisabQuestions from "./NisabQuestions";
import TodaysNisab from "./TodaysNisab";

function Nisab() {
  return (
    <CalculateLaoyout tab={2}>
      <NisabHero />
      <div className="text-center">
        <h3 className="uppercase text-secondary/80 text-small sm:text-light laptop:text-s2 font-normal py-2 sm:py-[4%]">
          nisab essentials
        </h3>
        <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-2 sm:pb-4">
          What is Nisab?
        </h2>
        <p className="w-5/6 laptop:w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
          Zakat is an obligatory act of worship for Muslims who meet a certain
          wealth threshold, where they are required to give a percentage of
          their wealth, usually 2.5%, to those who are eligible. This minimum
          threshold is known as Nisab(sometimes also spelled niṣāb).
        </p>
      </div>
      <TodaysNisab />
      <NisabQuestions />
    </CalculateLaoyout>
  );
}

export default Nisab;
