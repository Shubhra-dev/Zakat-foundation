import guideHero from "../../assets/guideHero.png";
function GuideHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${guideHero})` }}
    >
      <div className="h-full w-full bg-black/60 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-[70px] font-pally">
          Get yourself Zakat-ready!
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-4/5 sm:w-1/2 m-auto pb-6">
          Our handy Zakat guides are free to download and give you all the info
          you need to start calculating your Zakat with confidence.
        </p>
      </div>
    </div>
  );
}
export default GuideHero;
