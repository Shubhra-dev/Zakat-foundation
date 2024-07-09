import guideHero from "../../assets/guideHero.png";
function GuideHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${guideHero})` }}
    >
      <div className="h-full w-full bg-black/60 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle leading-tight font-pally">
          Prepare yourself for Zakat!
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-4/5 laptop:w-1/2 m-auto pb-6">
          Our convenient Zakat guides are available for free download which
          provides all the information you need to calculate your Zakat
          confidently.
        </p>
      </div>
    </div>
  );
}
export default GuideHero;
