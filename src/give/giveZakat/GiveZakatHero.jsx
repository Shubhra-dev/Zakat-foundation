import giveHero from "../../assets/giveHero.png";
import RoundedButton from "../../ui/RoundedButton";
function GiveZakatHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${giveHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally m-auto w-4/5 sm:w-3/5">
          Bring Zakat to life where you live
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-1/2 m-auto pb-6">
          Your Zakat can help. Give a little today.
        </p>
        <RoundedButton bg={"bg-accentCyan"}>Give Zakat</RoundedButton>
      </div>
    </div>
  );
}

export default GiveZakatHero;
