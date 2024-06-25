import CalculateLaoyout from "../CalculateLaoyout";
import CalculatorHero from "./CalculatorHero";
import ContactUs from "./ContactUs";
import FourSteps from "./FourSteps";

function Calculator() {
  return (
    <CalculateLaoyout tab={1}>
      <CalculatorHero />
      <div className="py-6 sm:py-10 text-center">
        <h2 className="text-secondary font-semibold text-h3 sm:text-title font-pally pb-4">
          Calculating your Zakat
        </h2>
        <p className="w-4/5 sm:w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
          Eliminate the hassle of calculating your Zakat. With just your asset
          details at your fingertips, you can swiftly determine your required
          contribution amount.
        </p>
        <h2 className="text-secondary font-semibold text-h3 sm:text-title font-pally py-2 sm:py-8 sm:w-3/5 m-auto sm:leading-[60px]">
          Four straightforward steps to calculating your Zakat
        </h2>
        <FourSteps />
      </div>
      <ContactUs />
    </CalculateLaoyout>
  );
}

export default Calculator;
