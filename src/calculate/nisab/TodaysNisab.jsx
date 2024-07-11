import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoldRate } from "../../features/nisab/nisabSlice";

function TodaysNisab() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldRate());
  }, [dispatch]);
  const nisabRate = useSelector((state) => state.nisabRate);
  console.log(nisabRate);
  return (
    <div className="text-center">
      <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        Today&apos;s Nisab
      </h2>
      <p className="w-5/6 laptop:w-345 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
        Daily Nisab rates on gold&apos;s buying and selling price. Our Nisab
        values are updated daily. It&apos;s calculation based on international
        gold rate and conversion rate. For more accurate rate{" "}
        <span
          onClick={() =>
            window.open(`https://www.bajus.org/gold-price`, "_blank")
          }
          className="font-bold cursor-pointer text-accentRed"
        >
          Click here
        </span>
      </p>
      {nisabRate.goldRate && (
        <div className="flex flex-col sm:flex-row justify-between laptop:justify-around px-8 laptop:px-0 gap-4 laptop:gap-0 py-8">
          <div className="bg-gold px-[2%] py-[3%] rounded-xl">
            <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
              Gold
              {/* <span className="text-h4 sm:text-s2 laptop:text-paragraph">
                
              </span> */}
            </h2>
            <h4 className="text-secondary font-semibold text-s2 sm:text-s1 font-pally pb-2">
              ৳{" "}
              {nisabRate.isLoading
                ? " loading..."
                : nisabRate.isError
                ? nisabRate.errorMsg
                : (nisabRate.goldRate.xau.selling_price * 87.48).toFixed(2)}
            </h4>
            <p className="w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80">
              Based on the gold price of ৳{" "}
              {nisabRate.goldRate.xau.selling_price.toFixed(2)} per gram
            </p>
          </div>
          <div className="bg-silver px-[2%] py-[3%] rounded-xl">
            <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
              Silver
              {/* <span className="text-h4 sm:text-s2 laptop:text-paragraph">
                (Sell)
              </span> */}
            </h2>
            <h4 className="text-secondary font-semibold text-s2 sm:text-s1 font-pally pb-2">
              ৳{" "}
              {nisabRate.isLoading
                ? " loading..."
                : nisabRate.isError
                ? nisabRate.errorMsg
                : (nisabRate.goldRate.xag.selling_price * 612.36).toFixed(2)}
            </h4>
            <p className="w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80">
              Based on the silver price of ৳{" "}
              {nisabRate.goldRate.xag.selling_price.toFixed(2)} per gram
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodaysNisab;
