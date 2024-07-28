import { useDispatch, useSelector } from "react-redux";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
import {
  updateOwnCashInBank,
  updateOwnCashInHand,
} from "../features/calculate/calculateSlice";

function Cash() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.calculate.own.cash);
  function handleCashInHand(num) {
    num = parseFloat(num);
    dispatch(updateOwnCashInHand(num));
  }
  function handleCashInBank(num) {
    num = parseFloat(num);
    dispatch(updateOwnCashInBank(num));
  }
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My cash
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        Enter the amount of cash you have including money in your bank
        account(s), whatever the source (e.g. salary, rental income, benefits
        etc.)
      </P>
      <ZakatInput
        label={"Cash in Hand"}
        name={"cash_hand"}
        value={cash.inHand}
        setData={handleCashInHand}
      />
      <ZakatInput
        label={"Cash in Bank"}
        name={"cash_bank"}
        value={cash.inBank}
        setData={handleCashInBank}
      />
    </div>
  );
}

export default Cash;
