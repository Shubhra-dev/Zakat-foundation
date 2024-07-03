import steps from "../../assets/4steps.png";
import StepItem from "./StepItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function FourSteps() {
  return (
    <EqualHeightFlexContainer>
      <div className="rounded-xl hidden tab:block">
        <img
          src={steps}
          alt="steps"
          className="object-fill h-full object-center"
        />
      </div>
      <div className="px-8 sm:px-[7%] flex-grow sm:h-full flex flex-col gap-3 sm:gap-2 sm:justify-between">
        <StepItem num={"1"} text={"Determine what your own."} />
        <StepItem num={"2"} text={"Subtract the amount you need to repay."} />
        <StepItem
          num={"3"}
          text={"Verify the balance exceeds the nisab value."}
        />
        <StepItem
          num={"4"}
          text={
            "Calculate 2.5% of that balance to determine the Zakat contribution"
          }
        />
      </div>
    </EqualHeightFlexContainer>
  );
}

export default FourSteps;
