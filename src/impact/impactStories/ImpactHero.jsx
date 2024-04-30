import impactHero from "../../assets/impactHero.png";

function ImpactHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${impactHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[7%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally w-4/5 m-auto">
          Your Zakat is changing lives, right now
        </h2>
        <p className="text-xl font-light text-primary w-3/4 m-auto py-6">
          ZF BD gets your Zakat to Muslims in need across the UK, every single
          day. Last year, you helped over 17,000 Muslims facing hardship &
          desperation
        </p>
      </div>
    </div>
  );
}

export default ImpactHero;
