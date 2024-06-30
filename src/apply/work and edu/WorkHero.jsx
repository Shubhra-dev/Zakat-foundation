import workHero from "../../assets/workHero.png";
function WorkHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${workHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally w-4/5 m-auto leading-tight">
          Work And Education Fund
        </h2>
      </div>
    </div>
  );
}

export default WorkHero;
