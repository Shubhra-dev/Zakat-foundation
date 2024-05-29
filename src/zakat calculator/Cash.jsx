import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";

function Cash() {
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-secondary pb-2 text-center"} font={"font-pally"}>
        My cash
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        Enter the amount of cash you have including money in your bank
        account(s), whatever the source (e.g. salary, rental income, benefits
        etc.)
      </P>
      <ZakatInput label={"Cash in Hand"} name={"cash_hand"} />
      <ZakatInput label={"Cash in Bank"} name={"cash_bank"} />
    </div>
  );
}

export default Cash;
