function CounterCardItem({ children, text, width }) {
  return (
    <div
      className={`rounded-xl text-center ${width} shadow-xl py-[3%] px-[2%] bg-primary`}
    >
      {children}
      <p className="w-full px-2 tab:px-0 tab:w-5/6 m-auto font-normal text-light sm:text-paragraph laptop:text-s2 text-secondary/60 pt2 sm:pt-6">
        {text}
      </p>
    </div>
  );
}

export default CounterCardItem;
