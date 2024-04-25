import steps from "../../assets/4steps.png";
import StepItem from "./StepItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function FourSteps() {
  return (
    <EqualHeightFlexContainer>
      <div className="rounded-xl">
        <img
          src={steps}
          alt="steps"
          className="object-fill h-full object-center"
        />
      </div>
      <div className="px-[7%] flex-grow h-full flex flex-col gap-2 justify-between">
        <StepItem num={"1"} text={"Work out what you own."} />
        <StepItem num={"2"} text={"Then take off what you owe."} />
        <StepItem
          num={"3"}
          text={"Check the balance to see it’s more than the Nisab value."}
        />
        <StepItem
          num={"4"}
          text={
            "Work out 2.5% of that and there you go, you’ve got your Zakat amount!"
          }
        />
      </div>
    </EqualHeightFlexContainer>
  );
}

export default FourSteps;
