import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
function ItemsOwe({ items }) {
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
      <div className="flex gap-4">
        {items.mortgage && (
          <div className="w-1/2 flex-grow">
            <ZakatInput label={"Mortgage"} name={"mortgage"} wd={"w-full"} />
          </div>
        )}
        {items.utility && (
          <div className="w-1/2 flex-grow">
            <ZakatInput
              label={"Utility Bills"}
              name={"utility"}
              wd={"w-full"}
            />
          </div>
        )}
      </div>
      <div className="flex gap-4">
        {items.personal_loans && (
          <div className="w-1/2 flex-grow">
            <ZakatInput
              label={"Personal loans"}
              name={"personal_loans"}
              wd={"w-full"}
            />
          </div>
        )}
        {items.overdraft && (
          <div className="w-1/2 flex-grow">
            <ZakatInput label={"Overdraft"} name={"overdraft"} wd={"w-full"} />
          </div>
        )}
      </div>
      <div className="flex gap-4">
        {items.credit_card && (
          <div className="w-1/2 flex-grow">
            <ZakatInput
              label={"Credit card"}
              name={"credit_card"}
              wd={"w-full"}
            />
          </div>
        )}
        {items.businness_liability && (
          <div className="w-1/2 flex-grow">
            <ZakatInput
              label={"Business liabilities"}
              name={"business_liability"}
              wd={"w-full"}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemsOwe;
