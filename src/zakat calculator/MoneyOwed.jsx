import { useDispatch, useSelector } from "react-redux";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
import {
  updateOwnMoneOwedExpected,
  updateOwnMoneOwedLoan,
} from "../features/calculate/calculateSlice";

function MoneyOwed() {
  const dispatch = useDispatch();
  const moneyOwed = useSelector((state) => state.calculate.own.moneOwed);
  function handleLoan(num) {
    num = parseFloat(num);
    dispatch(updateOwnMoneOwedLoan(num));
  }
  function handleSale(num) {
    num = parseFloat(num);
    dispatch(updateOwnMoneOwedExpected(num));
  }
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        Money owed to me
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you have lent money to someone and are confident it will be repaid,
        or you’ve sold something and are due to receive payment, you need to pay
        Zakat on these amounts.
      </P>
      <ZakatInput
        label={"Loan"}
        name={"loan"}
        value={moneyOwed.loan}
        setData={handleLoan}
      />
      <ZakatInput
        label={"Money Extpected from a sale"}
        name={"sale"}
        value={moneyOwed.expected}
        setData={handleSale}
      />
    </div>
  );
}

export default MoneyOwed;
