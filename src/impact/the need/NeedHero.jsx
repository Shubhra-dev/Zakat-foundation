import needHero from "../../assets/needHero.png";
function NeedHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${needHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-[70px] font-pally w-5/6 laptop:w-4/5 m-auto">
          Why your Zakat is needed here
        </h2>
        <p className="text-s3 sm:text-paragraph laptop:text-s2 font-light text-primary w-5/6 laptop:w-3/4 m-auto py-6">
          Your Zakat has the potential to change the lives of fellow Muslims in
          the Bangladesh. Find out why it’s needed.
        </p>
      </div>
    </div>
  );
}

export default NeedHero;
