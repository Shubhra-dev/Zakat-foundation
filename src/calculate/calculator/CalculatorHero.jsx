import { useNavigate } from "react-router-dom";
import heroCal from "../../assets/heroCal.png";
import RoundedButton from "../../ui/RoundedButton";
function CalculatorHero() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${heroCal})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold  text-h3 sm:text-[70px] font-pally">
          Zakat Calculator
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-1/2 m-auto pb-6">
          Our user-friendly calculator provides precise guidance on the amount
          you should contribute based on your current holdings
        </p>
        <RoundedButton onClick={() => navigate("/zakat_calculator")}>
          Calculate my Zakat
        </RoundedButton>
      </div>
    </div>
  );
}

export default CalculatorHero;
