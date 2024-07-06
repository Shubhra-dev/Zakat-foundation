import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoldRate } from "../../features/nisab/nisabSlice";

function TodaysNisab() {
  const nisabRate = useSelector((state) => state.nisabRate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoldRate());
  }, [dispatch]);
  console.log(nisabRate);
  return (
    <div className="text-center">
      <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        Today&apos;s Nisab
      </h2>
      <p className="w-5/6 laptop:w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80 pb-2 sm:pb-6">
        Daily Nisab rates on gold and silver. Plus now you can check historical
        Nisab rates dating back to 1st January 2000. Our Nisab values are
        updated daily.
      </p>
      <div className="flex flex-col sm:flex-row justify-between laptop:justify-around px-8 laptop:px-0 gap-4 laptop:gap-0 py-8">
        <div className="bg-gold px-[2%] py-[3%] rounded-xl">
          <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
            Gold
          </h2>
          <h4 className="text-secondary font-semibold text-s2 sm:text-s1 font-pally pb-2">
            ৳{" "}
            {nisabRate.isLoading
              ? " loading..."
              : nisabRate.isError
              ? nisabRate.errorMsg
              : Math.ceil(nisabRate.goldRate * 11.667 * 117)}
          </h4>
          <p className="w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80">
            Based on the gold price of ৳ {Math.ceil(nisabRate.goldRate * 117)}{" "}
            per gram
          </p>
        </div>
        <div className="bg-silver px-[2%] py-[3%] rounded-xl">
          <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally">
            Silver
          </h2>
          <h4 className="text-secondary font-semibold text-s2 sm:text-s1 font-pally pb-2">
            ৳ 1,12,908
          </h4>
          <p className="w-3/5 m-auto font-normal text-small sm:text-s2 text-secondary/80">
            Based on the gold price of ৳ 85.26 per gram
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodaysNisab;
