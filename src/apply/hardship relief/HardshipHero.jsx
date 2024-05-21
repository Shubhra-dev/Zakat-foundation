import hardshipHero from "../../assets/hardshipHero.png";
function HardshipHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${hardshipHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally w-4/5 m-auto leading-tight">
          Hardship Relief Fund
        </h2>
      </div>
    </div>
  );
}

export default HardshipHero;
