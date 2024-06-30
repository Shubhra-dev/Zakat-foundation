import impact2 from "../../assets/impact2.jpg";
import impact1 from "../../assets/impact1.jpg";
import impact3 from "../../assets/impact3.jpg";
import StoryItem from "./StoryItem";
function StoriesPeople() {
  return (
    <div className="text-center py-[4%] bg-primary px-[3%]">
      <h2 className="w-5/6 sm:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-title font-pally pb-4">
        The powerful stories of Muslims who have been helped by your Zakat
      </h2>
      <p className="w-full px-2 sm:px-0 sm:w-4/5 m-auto font-normal text-s3 sm:text-s2 text-secondary/80 pb-[3%]">
        These stories of Muslims who have been helped by your Zakat are all
        based on real cases, though the names have been changed in some of them
      </p>
      <div className="w-11/12 sm:w-4/5 m-auto gap-2 sm:gap-8 flex flex-wrap justify-center items-center">
        <StoryItem img={impact1} />
        <StoryItem img={impact2} />
        <StoryItem img={impact3} />
        <StoryItem img={impact1} />
        <StoryItem img={impact2} />
        <StoryItem img={impact3} />
      </div>
    </div>
  );
}

export default StoriesPeople;
