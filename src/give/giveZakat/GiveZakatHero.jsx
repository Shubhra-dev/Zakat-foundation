import { useNavigate } from "react-router-dom";
import giveHero from "../../assets/giveHero.png";
import RoundedButton from "../../ui/RoundedButton";
function GiveZakatHero() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${giveHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-[70px] font-pally m-auto w-4/5 laptop:w-3/5">
          Donate Zakat in your local community
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary laptop:w-1/2 m-auto pb-6">
          Your contribution to Zakat can make a difference. Donate today.
        </p>
        <RoundedButton
          onClick={() => navigate("/zakat/give")}
          bg={"bg-accentCyan"}
        >
          Give Zakat
        </RoundedButton>
      </div>
    </div>
  );
}

export default GiveZakatHero;
