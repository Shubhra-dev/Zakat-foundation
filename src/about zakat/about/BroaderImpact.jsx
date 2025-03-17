import GuideStepItem from "../../calculate/guides/GuideStepItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function BroaderImpact() {
  return (
    <div className="text-center pb-[4%] bg-slate-100 px-2">
      <h3 className="uppercase text-secondary/80 text-light tab:text-s2 font-medium py-4 laptop:py-[4%]">
        The Broader Impact of Zakat
      </h3>
      <h2 className="text-secondary font-bold text-s2 sm:text-s1 laptop:text-h2 font-pally w-4/5 m-auto">
        Zakat is not just about giving money; it’s about creating a fair and
        just society. Here’s how Zakat makes a difference:
      </h2>
      <div className="px-[3%] py-[2%] flex flex-col">
        <EqualHeightFlexContainer
          addedClass={
            "justify-between flex-wrap sm:flex-nowrap px-8 gap-8 py-8"
          }
        >
          <GuideStepItem
            width={"w-full sm:w-1/2"}
            num={"1"}
            text={
              "Zakat provides the poor with the resources they need to become self-sufficient. The Prophet Muhammad (PBUH) said: “The upper hand (the giver) is better than the lower hand (the receiver).” (Bukhari)."
            }
          />
          <GuideStepItem
            width={"w-full sm:w-1/2"}
            num={"2"}
            text={
              "By redistributing wealth, Zakat bridges the gap between the rich and the poor."
            }
          />
        </EqualHeightFlexContainer>
        <EqualHeightFlexContainer
          addedClass={"justify-between flex-wrap sm:flex-nowrap px-8 gap-8"}
        >
          <GuideStepItem
            width={"w-full sm:w-1/2"}
            num={"3"}
            text={
              "Giving Zakat deepens the giver’s connection to Allah (SWT) and reinforces their commitment to His commandments."
            }
          />
          <GuideStepItem
            width={"w-full sm:w-1/2"}
            num={"4"}
            text={
              "Zakat funds projects that benefit the entire community, such as schools, hospitals, and clean water initiatives."
            }
          />
        </EqualHeightFlexContainer>
      </div>
    </div>
  );
}

export default BroaderImpact;
