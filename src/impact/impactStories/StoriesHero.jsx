import impactStoryHero from "../../assets/impactStoryHero.png";
function StoriesHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${impactStoryHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[7%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle leading-tight font-pally w-4/5 m-auto">
          Stories of people who were impacted by your donation
        </h2>
        <p className="text-light sm:text-paragraph laptop:text-s2 font-light text-primary w-5/6 laptop:w-3/4 m-auto py-6">
          Here are a few stories of people who were relieved by the donation of
          your zakat.
        </p>
      </div>
    </div>
  );
}

export default StoriesHero;
