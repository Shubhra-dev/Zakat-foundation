import impactHero from "../../assets/impactHero.png";
function ApplyHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${impactHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[5%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle font-pally w-5/6 laptop:w-4/5 m-auto leading-tight">
          Apply for Assistance from Al-ZAKATI
        </h2>
        <p className="tyext-s3 sm:text-paragraph laptop:text-s2 font-light text-primary w-5/6 laptop:w-3/4 m-auto py-2 sm:py-6">
          If you&apos;re a Muslim in need of assistance, Zakat provided through
          BD ZF could potentially offer support.
        </p>
      </div>
    </div>
  );
}

export default ApplyHero;
