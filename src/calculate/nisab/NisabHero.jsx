import nisabHero from "../../assets/nisabHero.png";

function NisabHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${nisabHero})` }}
    >
      <div className="h-full w-full bg-black/60 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle leading-tight font-pally">
          Live Nisab Rates
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-3/4 sm:w-1/2 m-auto pb-6">
          Stay Informed about Today&apos;s Gold and Silver Rates to Calculate
          Zakat with the Current Nisab Value.
        </p>
      </div>
    </div>
  );
}

export default NisabHero;
