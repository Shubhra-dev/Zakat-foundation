import giveHero from "../../assets/faqGiveHero.png";

function GivingFAQHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${giveHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-[70px] font-pally">
          Giving FAQ&apos;s
        </h2>
        <p className="text-s3 sm:text-s2 font-light text-primary w-5/6 laptop:w-1/2 m-auto py-4">
          Everything you need to know about giving through Zakat Foundation
          Bangladesh
        </p>
      </div>
    </div>
  );
}

export default GivingFAQHero;
