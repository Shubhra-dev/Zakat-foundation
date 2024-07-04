import impact2 from "../../assets/impact2.jpg";
import impact1 from "../../assets/impact1.jpg";
import impact3 from "../../assets/impact3.jpg";
import StoryItem from "./StoryItem";
function StoriesPeople() {
  return (
    <div className="text-center py-[4%] bg-primary px-[3%]">
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        Stories of people who were impacted by your donation
      </h2>
      <p className="w-full px-4 laptop:px-0 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%]">
        Here are a few people who were relieved by the donation of your zakat.
        By your zakat their life has been changed. They are back in their feet,
        has smile on their lips.
      </p>
      <div className="w-11/12 tab:w-4/5 m-auto gap-2 tab:gap-8 flex flex-wrap justify-center items-center">
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
