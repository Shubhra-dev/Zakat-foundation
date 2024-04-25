import heroCal from "../../assets/heroCal.png";
import RoundedButton from "../../ui/RoundedButton";
function CalculatorHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroCal})` }}
    >
      <div className="h-full w-full bg-black/45 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally">
          Zakat Calculator
        </h2>
        <p className="text-xl font-normal text-primary w-1/2 m-auto pb-6">
          Our user-friendly calculator provides precise guidance on the amount
          you should contribute based on your current holdings
        </p>
        <RoundedButton>Calculate my Zakat</RoundedButton>
      </div>
    </div>
  );
}

export default CalculatorHero;
