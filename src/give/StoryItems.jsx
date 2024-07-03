import StoryCardItem from "./giveZakat/StoryCardItem";
import helpStory1 from "../assets/helpStory1.png";
import helpStory2 from "../assets/helpStory2.png";
import helpStory3 from "../assets/helpStory3.png";
import helpStory4 from "../assets/helpStory4.png";
import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";

function StoryItems() {
  return (
    <>
      <EqualHeightFlexContainer addedClass="pb-2 tab:pb-[5%] flex-col tab:flex-row items-center gap-2 sm:gap-4 tab:gap-4">
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
      </EqualHeightFlexContainer>
      <EqualHeightFlexContainer addedClass="pb-2 tab:py-[3%] flex-col tab:flex-row items-center gap-2 sm:gap-4 tab:gap-4">
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
      </EqualHeightFlexContainer>
    </>
  );
}

export default StoryItems;
