import impactHero from "../../assets/impactHero.png";

function ImpactHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${impactHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[7%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle leading-tight font-pally w-4/5 m-auto">
          Your Zakat is helping the Muslim Ummah
        </h2>
        <p className="text-s3 sm:text-paragraph laptop:text-s2 font-light text-primary w-5/6 laptop:w-3/4 m-auto py-3 sm:py-6">
          AL-ZAKATI gets your Zakat to Muslims in need across Bangladesh, every
          single day.
        </p>
      </div>
    </div>
  );
}

export default ImpactHero;
