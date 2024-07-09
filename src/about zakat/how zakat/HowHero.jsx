import abzHero from "../../assets/abzHero.png";
function HowHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${abzHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle font-pally w-5/6 m-auto leading-tight">
          How Zakat Works
        </h2>
      </div>
    </div>
  );
}

export default HowHero;
