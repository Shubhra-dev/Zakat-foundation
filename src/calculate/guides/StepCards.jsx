import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import GuideStepItem from "./GuideStepItem";
function StepCards() {
  return (
    <EqualHeightFlexContainer addedClass={"justify-between px-8 gap-8 pb-[5%]"}>
      <GuideStepItem
        num={"1"}
        text={"Get started with the basics of Zakat calculation"}
      />
      <GuideStepItem
        num={"2"}
        text={"Step-by-step instructions on how to calculate"}
      />
      <GuideStepItem
        num={"3"}
        text={"Some of the most common Zakat questions answered"}
      />
      <GuideStepItem
        num={"4"}
        text={
          "Specific guides available for businesses and those with missed Zakat"
        }
      />
    </EqualHeightFlexContainer>
  );
}

export default StepCards;
