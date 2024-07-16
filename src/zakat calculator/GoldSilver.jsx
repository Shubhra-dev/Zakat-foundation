import { useState } from "react";
import H2 from "../ui/H2";
import P from "../ui/P";
import Button from "../ui/Button";
import ZakatInput from "./ZakatInput";
import { useDispatch, useSelector } from "react-redux";
import {
  updateOwnGold,
  updateOwnSilver,
  updateOwnGoldVori,
  updateOwnSilverVori,
} from "../features/calculate/calculateSlice";
function GoldSilver() {
  const dispatch = useDispatch();
  const goldAndSilver = useSelector(
    (state) => state.calculate.own.goldAndSilver
  );
  const goldAndSilverVori = useSelector(
    (state) => state.calculate.own.goldAndSilverVori
  );
  const metalRate = useSelector((state) => state.nisabRate.goldRate);
  function handleGold(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    if (vori) {
      dispatch(updateOwnGold(num * (metalRate.xau.selling_price * 11.67)));
      dispatch(updateOwnGoldVori(num));
    } else dispatch(updateOwnGold(num));
  }
  function handleSilver(num) {
    if (isNaN(num)) {
      alert(`Input should be a number`);
      return;
    }
    if (vori) {
      dispatch(updateOwnSilver(num * (metalRate.xag.selling_price * 11.67)));
      dispatch(updateOwnSilverVori(num));
    } else dispatch(updateOwnSilver(num));
  }
  const [vori, setVori] = useState(false);
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-green-700 pb-2 text-center"} font={"font-pally"}>
        My Gold & Silver
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you’re not sure how much your gold and silver is worth you can enter
        the weight in grams. One vori is equal to 11.67 grams.
      </P>
      {!vori && (
        <>
          <ZakatInput
            label={"Gold"}
            name={"gold"}
            value={goldAndSilver.gold}
            setData={handleGold}
          />
          <ZakatInput
            label={"Silver"}
            name={"silver"}
            value={goldAndSilver.silver}
            setData={handleSilver}
          />
        </>
      )}
      {vori && (
        <>
          <ZakatInput
            label={"Gold"}
            name={"gold"}
            placeholder={"Enter in vori"}
            vori={true}
            value={goldAndSilverVori.goldVori}
            setData={handleGold}
          />
          <ZakatInput
            label={"Silver"}
            name={"silver"}
            placeholder={"Enter in vori"}
            vori={true}
            value={goldAndSilverVori.silverVori}
            setData={handleSilver}
          />
        </>
      )}
      <div className="py-2 w-max m-auto">
        <Button onClick={() => setVori(!vori)} bg={"bg-accentCyan"}>
          {vori ? "Change to amount" : "Change to vori"}
        </Button>
      </div>
    </div>
  );
}

export default GoldSilver;
