import { useState } from "react";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
import CheckBox from "../ui/CheckBox";
function Pensions() {
  const [know, setKnow] = useState(true);

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
      <div className="px-4 pb-4 font-semibold m-auto">
        <CheckBox
          name={"know"}
          label={"I know the amount of my pension on which Zakat is payable"}
          checked={know}
          handleChange={() => setKnow(true)}
        />
        <CheckBox
          name={"dont_know"}
          checked={!know}
          label={
            "I don’t know the amount of my pension on which Zakat is payable"
          }
          handleChange={() => setKnow(false)}
        />
      </div>

      {know && <ZakatInput name={"capital_gain"} />}
      {!know && (
        <div className="flex items-center gap-4">
          <div className="w-1/2 pb-2">
            <P p={"p-0"} add={"font-semibold"}>
              Type of pension scheme
            </P>
            <select
              name="pension_scheme"
              id="pension_scheme"
              className="w-full h-full py-2 border border-gray-300 rounded-xl text-paragraph"
            >
              <option value="fi">Bonds/Fixed interest/Gilts</option>
              <option value="scs">Shariah compliant Scheme</option>
              <option value="mp">Mixed Portfolio</option>
              <option value="eq">Equity</option>
              <option value="dir">Direct/phisical property</option>
            </select>
          </div>
          <div className="w-1/2">
            <ZakatInput
              label={"Total Pension Value"}
              name={"reason_share"}
              wd={"w-full"}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Pensions;
