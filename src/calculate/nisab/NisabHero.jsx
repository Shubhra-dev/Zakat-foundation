import nisabHero from "../../assets/nisabHero.png";

function NisabHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${nisabHero})` }}
    >
      <div className="h-full w-full bg-black/50 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally">
          Live Nisab Rates
        </h2>
        <p className="text-xl font-normal text-primary w-1/2 m-auto pb-6">
          Current Nisab Value: Stay Updated with Today’s Gold and Silver Rates
          for Zakat Calculation
        </p>
      </div>
    </div>
  );
}

export default NisabHero;
