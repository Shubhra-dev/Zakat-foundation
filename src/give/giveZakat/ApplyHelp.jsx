import GradientBallBG from "../../ui/GradientBallBG";
import RoundedButton from "../../ui/RoundedButton";
function ApplyHelp() {
  return (
    <GradientBallBG bg={"accentCyan"}>
      <div className="w-7/12 m-auto text-center">
        <h2 className="text-primary font-bold text-[50px] font-pally">
          Helping you bring Zakat to life where you live
        </h2>
        <p className="text-primary text-xl font-light py-4">
          We invite you to explore our annual report for a comprehensive
          overview of our activities and achievements. Discover in detail how
          your Zakat is creating lasting change in communities across the
          Bangladesh.
        </p>
      </div>
      <div className="w-1/2 m-auto flex justify-center gap-6 items-center py-[2%]">
        <RoundedButton bg={"bg-primary"} textColor={"text-accentCyan"}>
          Give Zakat
        </RoundedButton>
        <RoundedButton bg={"bg-primary"} textColor={"text-accentRed"}>
          Apply for Help
        </RoundedButton>
      </div>
    </GradientBallBG>
  );
}

export default ApplyHelp;
