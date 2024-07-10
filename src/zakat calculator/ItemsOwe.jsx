import { useDispatch, useSelector } from "react-redux";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
import {
  updateOweBusinessLiabilities,
  updateOweCreditCard,
  updateOweMortgage,
  updateOweOverdraft,
  updateOwePersonalLoan,
  updateOweUtilityBill,
} from "../features/calculate/calculateSlice";
function ItemsOwe({ items }) {
  const dispatch = useDispatch();
  const itemsOwe = useSelector((state) => state.calculate.owe);
  function handleMortgage(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOweMortgage(num));
  }
  function handlePersonalLoan(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOwePersonalLoan(num));
  }
  function handleCreditCard(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOweCreditCard(num));
  }
  function handleUtility(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOweUtilityBill(num));
  }
  function handleOverdraft(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOweOverdraft(num));
  }
  function handleBusinessLiability(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOweBusinessLiabilities(num));
  }
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-accentRed pb-2 text-center"} font={"font-pally"}>
        Money I owe
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        For long-term debts (e.g. mortgage), you may enter up-to 12 months worth
        of repayments. For bills, only enter amounts that are either due now or
        overdue. For businesses, any tax liabilities in relation to a prior
        financial year that are still to be paid can also be deducted.
      </P>
      <div className="flex flex-col tab:flex-row gap-2 tab:gap-4 px-4">
        {items.mortgage && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Mortgage"}
              name={"mortgage"}
              wd={"w-full"}
              setData={handleMortgage}
              value={itemsOwe.mortgage}
            />
          </div>
        )}
        {items.utility && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Utility Bills"}
              name={"utility"}
              wd={"w-full"}
              setData={handleUtility}
              value={itemsOwe.utilityBill}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col tab:flex-row gap-2 tab:gap-4 px-4">
        {items.personal_loans && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Personal loans"}
              name={"personal_loans"}
              wd={"w-full"}
              setData={handlePersonalLoan}
              value={itemsOwe.personalLoan}
            />
          </div>
        )}
        {items.overdraft && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Overdraft"}
              name={"overdraft"}
              wd={"w-full"}
              setData={handleOverdraft}
              value={itemsOwe.overdraft}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col tab:flex-row gap-2 tab:gap-4 px-4">
        {items.credit_card && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Credit card"}
              name={"credit_card"}
              wd={"w-full"}
              setData={handleCreditCard}
              value={itemsOwe.creditCard}
            />
          </div>
        )}
        {items.businness_liability && (
          <div className="w-full tab:w-1/2 flex-grow">
            <ZakatInput
              label={"Business liabilities"}
              name={"business_liability"}
              wd={"w-full"}
              setData={handleBusinessLiability}
              value={itemsOwe.businnessLiabilities}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemsOwe;
