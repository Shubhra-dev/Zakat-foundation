import workHero from "../../assets/workHero.png";
function WorkHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${workHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[15%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle font-pally w-5/6 m-auto leading-tight">
          Work & Education Fund
        </h2>
      </div>
    </div>
  );
}

export default WorkHero;
