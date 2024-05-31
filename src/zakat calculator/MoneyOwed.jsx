import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";

function MoneyOwed() {
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
      <ZakatInput label={"Loan"} name={"loan"} />
      <ZakatInput label={"Money Extpected from a sale"} name={"sale"} />
    </div>
  );
}

export default MoneyOwed;
