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
  const nisabRate = useSelector((state) => state.nisabRate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldRate());
  }, [dispatch]);
  const own = useSelector((state) => state.calculate.own);
  const owe = useSelector((state) => state.calculate.owe);
  const totalOwn = calculateTotalOwn(own);
  const totalOwe = calculateTotalOwe(owe);
  const todaysNisab = nisabRate.goldRate
    ? (nisabRate.goldRate.xag.selling_price * 612.36).toFixed(2)
    : 0;
  const zakat =
    totalOwn - totalOwe >= todaysNisab
      ? ((totalOwn - totalOwe) * 0.025).toFixed(2)
      : 0.0;
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
            {nisabRate.isLoading
              ? " Calculating..."
              : nisabRate.isError
              ? nisabRate.errorMsg
              : todaysNisab}
          </p>
        </div>
      </div>
      <div className="flex items-center w-full text-green-900 p-4">
        <p className="w-[40%] text-s2 font-semibold">Zakat (2.5%) is:</p>
        <p className="w-[65%] text-right text-s2 font-semibold">
          <span>৳ {zakat}</span>
        </p>
      </div>
      {zakat > 1 && (
        <div className="w-full">
          <p
            className={"text-secondary text-h4 text-center mont font-semibold"}
          >
            Round Up Your Zakat:
          </p>
          <div className="flex flex-wrap justify-center items-center">
            {[
              ...new Set([
                Math.floor(zakat) - (Math.floor(zakat) % 10),
                Math.ceil(zakat) + (10 - (Math.ceil(zakat) % 10)),
                Math.floor(zakat) - (Math.floor(zakat) % 100),
                Math.ceil(zakat) + (100 - (Math.ceil(zakat) % 100)),
              ]),
            ].map((item) => (
              <div
                onClick={() => navigate(`/zakat/give/${item}`)}
                className="w-max px-4 m-auto bg-green-900 cursor-pointer mt-2 rounded-md text-center text-primary font-medium text-paragraph"
                key={item}
              >
                {`Give ৳ ${item}`}
              </div>
            ))}
            <div
              onClick={() => navigate(`/zakat/give/${zakat}`)}
              className="w-max px-4 m-auto bg-green-900 cursor-pointer mt-2 rounded-md text-center text-primary font-medium text-paragraph"
            >
              {`Give exact  ৳ ${zakat}`}
            </div>
          </div>
        </div>
      )}
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
