import helpStory1 from "../../assets/helpStory1.png";
import helpStory2 from "../../assets/helpStory2.png";
import helpStory3 from "../../assets/helpStory3.png";
import helpStory4 from "../../assets/helpStory4.png";
import StoryCardItem from "./StoryCardItem";

function StoryCards() {
  return (
    <div className="bg-primary py-[4%] w-full text-center">
      <h2 className="text-secondary font-semibold text-6xl font-pally pb-[5%]">
        How you’ve impacted peoples lives
      </h2>
      <div className="px-[3%] pb-[5%] flex items-center  gap-4">
        <StoryCardItem
          img={helpStory1}
          alt={"zain"}
          heading={"Your Zakat was lifeline for Zain"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Mauris ac interdum felis venenatis donec odio leo eleifend integer."
          }
        />
        <StoryCardItem
          img={helpStory2}
          alt={"irin"}
          heading={"Zakat save Irin form eviction"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Mauris ac interdum felis venenatis donec odio leo eleifend integer."
          }
        />
      </div>
      <div className="p-[3%] flex items-center  gap-4">
        <StoryCardItem
          img={helpStory3}
          alt={"alia"}
          heading={"Zakat reduce Financial Crisis of Alia"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Mauris ac interdum felis venenatis donec odio leo eleifend integer."
          }
        />
        <StoryCardItem
          img={helpStory4}
          alt={"mustafa"}
          heading={"How Zakat Helped to Mustafa"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Mauris ac interdum felis venenatis donec odio leo eleifend integer."
          }
        />
      </div>
    </div>
  );
}

export default StoryCards;
