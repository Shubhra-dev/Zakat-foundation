import CalculateLaoyout from "../CalculateLaoyout";
import CalculatorHero from "./CalculatorHero";
import ContactUs from "./ContactUs";
import FourSteps from "./FourSteps";

function Calculator() {
  return (
    <CalculateLaoyout tab={1}>
      <CalculatorHero />
      <div className="py-6 sm:py-10 text-center">
        <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
          Calculating your Zakat
        </h2>
        <p className="w-4/5 sm:w-4/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
          Make the process of calculating your Zakat simple and hassle-free by
          using our Zakat Calculator. With just a few details about your assets,
          you can easily determine the exact amount of Zakat you need to
          contribute.
        </p>
        <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally py-2 sm:py-8 sm:w-3/5 m-auto sm:leading-[60px]">
          Four straightforward steps to calculating your Zakat
        </h2>
        <FourSteps />
        <p className="w-4/5 sm:w-4/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:py-6">
          Our Zakat Calculator simplifies this process, ensuring you fulfill
          your obligation accurately and with ease.
        </p>
      </div>
      <ContactUs />
    </CalculateLaoyout>
  );
}

export default Calculator;
