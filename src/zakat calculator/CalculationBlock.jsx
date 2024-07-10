import { useDispatch, useSelector } from "react-redux";
import {
  calculateTotalOwe,
  calculateTotalOwn,
} from "../features/calculate/utils";
import { useEffect } from "react";
import { fetchGoldRate } from "../features/nisab/nisabSlice";
import { useNavigate } from "react-router-dom";

function CalculationBlock() {
  const navigate = useNavigate();
  const nisabRate = useSelector((state) => state.nisabRate.goldRate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldRate());
  }, [dispatch]);
  const own = useSelector((state) => state.calculate.own);
  const owe = useSelector((state) => state.calculate.owe);
  const totalOwn = calculateTotalOwn(own);
  const totalOwe = calculateTotalOwe(owe);
  const todaysNisab = (nisabRate.selling_price * 87.48).toFixed(2);
  const zakat = ((totalOwn - totalOwe - todaysNisab) * 0.025).toFixed(2);
  console.log(zakat);
  return (
    <>
      <div className="rounded-xl bg-green-900 p-4 text-primary">
        <p className="font-semibold text-s2 text-center">
          Calculation between What I own & What I owe
        </p>
      </div>
      <div className="mt-6 py-4 px-2 bg-primary rounded-xl shadow-xl">
        <p className="font-semibold text-secondary text-s2 pb-2 border-b border-b-secondary">
          Zakat Calculation
        </p>
        <div className="flex font-medium text-s2 items-center w-full pt-2 text-green-700">
          <p className="w-[40%]">What I have</p>
          <p className="w-[60%] text-right">
            <span>৳</span>
            {totalOwn.toFixed(2)}
          </p>
        </div>
        <div className="flex font-medium text-s2 items-center w-full pt-2 text-accentRed">
          <p className="w-[40%]">(-) What I Owe</p>
          <p className="w-[60%] text-right">
            <span>৳</span>
            {totalOwe.toFixed(2)}
          </p>
        </div>
        <div className="flex font-medium text-s2 items-center w-full pt-2 text-accentPurple">
          <p className="w-[40%]">Is equal to</p>
          <p className="w-[60%] text-right">
            <span>৳</span>
            {(totalOwn - totalOwe).toFixed(2)}
          </p>
        </div>
        <div className="flex font-medium text-s2 items-center w-full pt-2 text-green-800">
          <p className="w-[40%]">Today&apos;s Nisab is</p>
          <p className="w-[60%] text-right">
            <span>৳</span>
            {todaysNisab}
          </p>
        </div>
      </div>
      <div className="flex items-center w-full text-green-900 p-4">
        <p className="w-[40%] text-s2 font-semibold">Zakat (2.5%) is:</p>
        <p className="w-[65%] text-right text-s2 font-semibold">
          <span>৳ {zakat < 1 ? "0.00" : zakat}</span>
        </p>
      </div>
      <div className="p-4 w-full">
        <p className="text-center text-laptop text-secondary font-medium">
          Still Have Questions?
          <span
            className="cursor-pointer text-accentRed"
            onClick={() => navigate("/contact")}
          >
            {" "}
            Get In Touch
          </span>
        </p>
      </div>
    </>
  );
}

export default CalculationBlock;
