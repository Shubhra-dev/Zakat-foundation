import impactHero from "../../assets/impactHero.png";
function ApplyHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${impactHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[5%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally w-5/6 sm:w-4/5 m-auto leading-tight">
          Apply for help from Zakat Foundation Bangladesh
        </h2>
        <p className="tyext-s3 sm:text-s2 font-light text-primary w-5/6 sm:w-3/4 m-auto py-2 sm:py-6">
          If you’re a Muslim in need of support, Zakat given through NZF may be
          able to help.
        </p>
      </div>
    </div>
  );
}

export default ApplyHero;
