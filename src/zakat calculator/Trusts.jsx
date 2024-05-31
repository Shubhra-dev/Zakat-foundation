import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
function Trusts() {
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My ISAs, Junior ISAs & Child Trust Funds
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        Zakat is payable on ISAs and Child Trust Funds. It's important that you
        enter the full value of your investment and the calculator will do the
        rest.
      </P>
      <ZakatInput label={"Stocks & shares ISA/CTF"} name={"isa_ctf"} />
      <ZakatInput label={"Cash ISA"} name={"isa_cash"} />
    </div>
  );
}

export default Trusts;
