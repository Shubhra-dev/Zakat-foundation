import { useDispatch, useSelector } from "react-redux";
import H2 from "../ui/H2";
import P from "../ui/P";
import ZakatInput from "./ZakatInput";
import {
  updateOwnBusinessAssetCash,
  updateOwnBusinessAssetReceivable,
  updateOwnBusinessAssetStock,
} from "../features/calculate/calculateSlice";
function BusinessAsset() {
  const dispatch = useDispatch();
  const businessAsset = useSelector(
    (state) => state.calculate.own.businessAsset
  );
  function handleCash(num) {
    num = parseFloat(num);
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOwnBusinessAssetCash(num));
  }
  function handleReceivable(num) {
    num = parseFloat(num);
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    dispatch(updateOwnBusinessAssetReceivable(num));
  }
  function handleStock(num) {
    num = parseFloat(num);
    dispatch(updateOwnBusinessAssetStock(num));
  }
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My business assets
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you own stocks and shares, Zakat is due on them. Enter the current
        market value of these investments below.
      </P>
      <ZakatInput
        label={"Cash"}
        name={"cash"}
        value={businessAsset.cash}
        setData={handleCash}
      />
      <ZakatInput
        label={"Receivables"}
        name={"receivables"}
        value={businessAsset.receivable}
        setData={handleReceivable}
      />
      <ZakatInput
        label={"Stock"}
        name={"stock"}
        value={businessAsset.stock}
        setData={handleStock}
      />
    </div>
  );
}

export default BusinessAsset;
