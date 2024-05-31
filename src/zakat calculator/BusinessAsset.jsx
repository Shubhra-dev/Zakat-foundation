import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
function BusinessAsset() {
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My business assets
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you own stocks and shares, Zakat is due on them. Enter the current
        market value of these investments below.
      </P>
      <ZakatInput label={"Cash"} name={"cash"} />
      <ZakatInput label={"Receivables"} name={"receivables"} />
      <ZakatInput label={"Stock"} name={"stock"} />
    </div>
  );
}

export default BusinessAsset;
