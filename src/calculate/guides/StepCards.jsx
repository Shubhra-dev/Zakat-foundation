import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import GuideStepItem from "./GuideStepItem";
function StepCards() {
  return (
    <EqualHeightFlexContainer
      addedClass={
        "justify-between flex-wrap sm:flex-nowrap px-8 gap-6 sm:gap-8 pb-4 sm:pb-[5%]"
      }
    >
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"1"}
        text={"Get started with the basics of Zakat calculation"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"2"}
        text={"Step-by-step instructions on how to calculate"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"3"}
        text={"Some of the most common Zakat questions answered"}
      />
      <GuideStepItem
        width={"w-[45%] sm:w-1/4"}
        num={"4"}
        text={
          "Specific guides available for businesses and those with missed Zakat"
        }
      />
    </EqualHeightFlexContainer>
  );
}

export default StepCards;
