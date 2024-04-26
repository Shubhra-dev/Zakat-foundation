import CountUp from "react-countup";
import GiveLayout from "../GiveLayout";
import GiveCards from "./GiveCards";
import GiveZakatHero from "./GiveZakatHero";
import SummaryGiveZakat from "./SummaryGiveZakat";
import CounterCardItem from "./CounterCardItem";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import RoundedButton from "../../ui/RoundedButton";

function GiveZakat() {
  return (
    <GiveLayout tab={1}>
      <GiveZakatHero />
      <SummaryGiveZakat />
      <GiveCards />
      <div className="py-[3.5%] bg-accentRed/10">
        <h2 className="text-secondary font-semibold text-[55px] font-pally pb-4  text-center">
          This is what your Zakat is doing
        </h2>
        <EqualHeightFlexContainer addedClass="justify-between gap-6 w-5/6 m-auto items-center">
          <CounterCardItem
            width={"w-5/12"}
            text={"Amount of Zakat distributed in February"}
          >
            <CountUp
              prefix="৳ "
              duration={3}
              end={112908}
              className="text-accentRed text-6xl font-bold"
            />
          </CounterCardItem>

          <CounterCardItem
            width={"w-4/12"}
            text={"Number of people helped in February"}
          >
            <CountUp
              duration={3}
              end={1606}
              className="text-accentRed text-6xl font-bold"
            />
          </CounterCardItem>
          <CounterCardItem
            width={"w-3/12"}
            text={"Number of people helped 2024"}
          >
            <CountUp
              duration={3}
              end={3382}
              className="text-accentRed text-6xl font-bold"
            />
          </CounterCardItem>
        </EqualHeightFlexContainer>
        <div className="flex justify-center items-center m-auto pt-[2%]">
          <RoundedButton
            bg={"bg-primary border border-accentRed"}
            textColor={"text-accentRed"}
          >
            Find out more about Zakat is helping
          </RoundedButton>
        </div>
      </div>
    </GiveLayout>
  );
}

export default GiveZakat;
