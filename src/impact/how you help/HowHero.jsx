import howHero from "../../assets/howHero.png";
function HowHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${howHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[10%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally w-4/5 m-auto">
          How You Help
        </h2>
      </div>
    </div>
  );
}

export default HowHero;
