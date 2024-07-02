import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";

function Pensions() {
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My Pensions
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you have a defined contribution pension scheme, Zakat is due on
        specific assets in the fund. If you don't know which assets are in the
        fund, select the type of pension and the calculator will work out the
        amount on which Zakat is payable.
      </P>
      <ZakatInput name={"capital_gain"} />
    </div>
  );
}

export default Pensions;
