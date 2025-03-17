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
      <div className="px-8 sm:px-[5%] flex-grow sm:h-full flex flex-col gap-3 sm:gap-2 sm:justify-between">
        <StepItem
          num={"1"}
          text={
            "Identify and total all your assets, including cash, savings, investments, gold, silver, and business inventory."
          }
        />
        <StepItem
          num={"2"}
          text={
            "Subtract any outstanding debts or immediate expenses from your total assets."
          }
        />
        <StepItem
          num={"3"}
          text={
            "Ensure your remaining balance meets or exceeds the Nisab value (the minimum amount of wealth required to be eligible for Zakat)."
          }
        />
        <StepItem
          num={"4"}
          text={
            "4.Multiply the final balance by 2.5% to determine your Zakat contribution."
          }
        />
      </div>
    </EqualHeightFlexContainer>
  );
}

export default FourSteps;
