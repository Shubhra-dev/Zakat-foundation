import GuideStepItem from "../../calculate/guides/GuideStepItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function Reasons() {
  return (
    <div className="text-center pb-[4%] bg-slate-100">
      <h3 className="uppercase text-secondary/80 text-xl font-normal py-[4%]">
        reasons to give
      </h3>
      <h2 className="text-secondary font-bold text-6xl font-pally">
        By giving your Zakat through ZF BD, you are:
      </h2>
      <div className="px-[3%] py-[2%] flex flex-col">
        <EqualHeightFlexContainer
          addedClass={"justify-between px-8 gap-8 py-8"}
        >
          <GuideStepItem
            width={"w-1/3"}
            num={"1"}
            text={
              "Using a trusted and verified online platform to calculate, give and track your Zakat."
            }
          />
          <GuideStepItem
            width={"w-1/3"}
            num={"2"}
            text={"Reducing poverty in the UK Muslim community"}
          />
          <GuideStepItem
            width={"w-1/3"}
            num={"3"}
            text={"Keeping families in their homes"}
          />
        </EqualHeightFlexContainer>
        <EqualHeightFlexContainer addedClass={"justify-between px-8 gap-8"}>
          <GuideStepItem
            width={"w-1/3"}
            num={"4"}
            text={"Helping people get back into work"}
          />
          <GuideStepItem
            width={"w-1/3"}
            num={"5"}
            text={"Strengthening the faith and closeness of our community"}
          />
          <GuideStepItem
            width={"w-1/3"}
            num={"6"}
            text={"Giving a voice to Muslims across the UK"}
          />
        </EqualHeightFlexContainer>
      </div>
    </div>
  );
}

export default Reasons;
