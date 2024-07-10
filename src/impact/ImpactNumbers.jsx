import CountUp from "react-countup";
import CounterCardItem from "../give/giveZakat/CounterCardItem";
import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import RoundedButton from "../ui/RoundedButton";
import { useNavigate } from "react-router-dom";

function ImpactNumbers({ bg }) {
  const navigate = useNavigate();
  return (
    <div className={`py-[3.5%] ${bg ? bg : "bg-primary"}`}>
      <h2 className="text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4 text-center">
        Your Impact In Numbers
      </h2>
      <EqualHeightFlexContainer addedClass="flex-col sm:flex-row justify-between gap-2 tab:gap-6 w-11/12 tab:w-5/6 m-auto items-center">
        <CounterCardItem width={"w-full sm:w-4/12"} text={"Helped in February"}>
          <CountUp
            duration={3}
            end={1606}
            className="text-accentRed text-h4 sm:text-h2 laptop:text-6xl font-bold"
          />
          <h3 className="text-center text-accentPurple text-s2 sm:text-h4 laptop:text-h3 font-bold pt-3">
            Muslims
          </h3>
        </CounterCardItem>
        <CounterCardItem width={"w-full sm:w-3/12"} text={"Helped in 2024"}>
          <CountUp
            duration={3}
            end={3382}
            className="text-accentRed text-h4 sm:text-h2 laptop:text-6xl font-bold"
          />
          <h3 className="text-center text-accentPurple text-s2 sm:text-h4 laptop:text-h3 font-bold pt-3">
            Muslims
          </h3>
        </CounterCardItem>
        <CounterCardItem
          width={"w-full sm:w-5/12"}
          text={"Distributed in February"}
        >
          <CountUp
            prefix="৳ "
            duration={3}
            end={112908}
            className="text-accentRed text-h4 sm:text-h2 laptop:text-6xl font-bold"
          />
          <h3 className="text-center text-accentPurple text-s2 sm:text-h4 laptop:text-h3 font-bold pt-3">
            Zakat
          </h3>
        </CounterCardItem>
      </EqualHeightFlexContainer>
      <div className="flex justify-center items-center m-auto pt-[3%]">
        <RoundedButton
          bg={"bg-accentCyan"}
          textColor={"text-primary"}
          onClick={() => navigate("/how_you_help")}
        >
          How You Help
        </RoundedButton>
      </div>
    </div>
  );
}

export default ImpactNumbers;
