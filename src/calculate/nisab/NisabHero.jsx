import nisabHero from "../../assets/nisabHero.png";

function NisabHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${nisabHero})` }}
    >
      <div className="h-full w-full bg-black/60 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally">
          Live Nisab Rates
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-3/4 sm:w-1/2 m-auto pb-6">
          Current Nisab Value: Stay Updated with Today’s Gold and Silver Rates
          for Zakat Calculation
        </p>
      </div>
    </div>
  );
}

export default NisabHero;
