import GuideStepItem from "../../calculate/guides/GuideStepItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function Reasons() {
  return (
    <div className="text-center pb-[4%] bg-slate-100 px-2">
      <h3 className="uppercase text-secondary/80 text-light tab:text-s2 font-medium py-4 laptop:py-[4%]">
        reasons to donate
      </h3>
      <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
        By giving your Zakat through AL-ZAKATI, you are:
      </h2>
      <div className="px-[3%] py-[2%] flex flex-col">
        <EqualHeightFlexContainer
          addedClass={
            "justify-between flex-wrap sm:flex-nowrap px-8 gap-8 py-8"
          }
        >
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"1"}
            text={
              "Utilizing a trusted, reliable and authenticated online platform to calculate, administrate and distribute your Zakat."
            }
          />
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"2"}
            text={
              "Reducing proverty rate in the muslim community of Bangladesh"
            }
          />
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"3"}
            text={"Keeping families fed and sheltered"}
          />
        </EqualHeightFlexContainer>
        <EqualHeightFlexContainer
          addedClass={"justify-between flex-wrap sm:flex-nowrap px-8 gap-8"}
        >
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"4"}
            text={"Helping people get back on their feet."}
          />
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"5"}
            text={"Strengthening the bonds and unity of our muslim community."}
          />
          <GuideStepItem
            width={"w-full sm:w-1/3"}
            num={"6"}
            text={"Giving a voice to Muslims across Bangladesh"}
          />
        </EqualHeightFlexContainer>
      </div>
    </div>
  );
}

export default Reasons;
