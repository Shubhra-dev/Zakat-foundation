import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import GuideStepItem from "./GuideStepItem";
function StepCards() {
  return (
    <EqualHeightFlexContainer
      addedClass={
        "justify-between flex-wrap sm:flex-nowrap px-8 gap-6 sm:gap-8 pb-4 tab:pb-[5%]"
      }
    >
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"1"}
        text={"Calculate your Zakat in three easy steps"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"2"}
        text={"Learn about Zakat and the importance of paying it"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"3"}
        text={"Find out who is eligible for receiving zakat"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"4"}
        text={"Discover the timing and the method of distribution of zakat."}
      />
    </EqualHeightFlexContainer>
  );
}

export default StepCards;
