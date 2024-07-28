import { useDispatch, useSelector } from "react-redux";
import {
  updateOwnShareCapitalGain,
  updateOwnShareOther,
} from "../features/calculate/calculateSlice";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";

function Shares() {
  const dispatch = useDispatch();
  const share = useSelector((state) => state.calculate.own.share);
  function handleCapitalgain(num) {
    num = parseFloat(num);
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOwnShareCapitalGain(num));
  }
  function handleother(num) {
    num = parseFloat(num);
    dispatch(updateOwnShareOther(num));
  }
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My shares
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you own stocks and shares, Zakat is due on them. Enter the current
        market value of these investments below.
      </P>
      <ZakatInput
        label={"Shares bought exclusively to resell for capital gain"}
        name={"capital_gain"}
        value={share.capitalGain}
        setData={handleCapitalgain}
      />
      <ZakatInput
        label={"Shares bought for any other reason"}
        name={"reason_share"}
        value={share.other}
        setData={handleother}
      />
    </div>
  );
}

export default Shares;
