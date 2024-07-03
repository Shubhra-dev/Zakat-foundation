import CalculateLaoyout from "../CalculateLaoyout";
import DowloadGuides from "./DowloadGuides";
import GuideContact from "./GuideContact";
import GuideHero from "./GuideHero";
import HelpSection from "./HelpSection";

import StepCards from "./StepCards";

function ZakatGuides() {
  return (
    <CalculateLaoyout tab={3}>
      <GuideHero />
      <div className="text-center pb-[4%]">
        <h3 className="uppercase text-secondary/80 text-light sm:text-paragraph laptop:text-s2 font-normal py-3 tab:py-[4%]">
          knowledge
        </h3>
        <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
          It&apos;s easy when you know how
        </h2>
      </div>
      <StepCards />
      <DowloadGuides />
      <HelpSection />
      <GuideContact />
    </CalculateLaoyout>
  );
}

export default ZakatGuides;
