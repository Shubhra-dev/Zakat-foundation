import askHero from "../../assets/faqGiveHero.png";
function AskHero() {
  return (
    <div
      className="bg-cover bg-center w-full"
      style={{ backgroundImage: `url(${askHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
        <h2 className="text-primary font-semibold text-h3 sm:text-title laptop:text-bigTitle leading-tight font-pally py-[2.5%]">
          Ask a Question
        </h2>
      </div>
    </div>
  );
}

export default AskHero;
