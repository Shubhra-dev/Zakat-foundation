import StoryItems from "../StoryItems";

function StoryCards() {
  return (
    <div className="bg-primary p-[4%] w-full text-center">
      <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-[5%]">
        How you’ve impacted peoples lives
      </h2>
      <StoryItems />
    </div>
  );
}

export default StoryCards;
