function TodaysNisab() {
  return (
    <div className="text-center">
      <h2 className="text-secondary font-semibold text-[55px] font-pally pb-4">
        Today&apos;s Nisab
      </h2>
      <p className="w-3/5 m-auto font-normal text-xl text-secondary/80 pb-6">
        Daily Nisab rates on gold and silver. Plus now you can check historical
        Nisab rates dating back to 1st January 2000. Our Nisab values are
        updated daily.
      </p>
      <div className="flex justify-around py-8">
        <div className="bg-gold px-[2%] py-[3%] rounded-xl">
          <h2 className="text-secondary font-semibold text-[55px] font-pally">
            Gold
          </h2>
          <h4 className="text-secondary font-semibold text-[35px] font-pally pb-2">
            ৳ 1,12,908
          </h4>
          <p className="w-3/5 m-auto font-normal text-xl text-secondary/80">
            Based on the gold price of ৳ 9,680 per gram
          </p>
        </div>
        <div className="bg-silver px-[2%] py-[3%] rounded-xl">
          <h2 className="text-secondary font-semibold text-[55px] font-pally">
            Silver
          </h2>
          <h4 className="text-secondary font-semibold text-[35px] font-pally pb-2">
            ৳ 1,12,908
          </h4>
          <p className="w-3/5 m-auto font-normal text-xl text-secondary/80">
            Based on the gold price of ৳ 85.26 per gram
          </p>
        </div>
      </div>
    </div>
  );
}

export default TodaysNisab;
