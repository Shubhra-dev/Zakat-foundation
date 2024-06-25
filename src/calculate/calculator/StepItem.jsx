function StepItem({ num, text }) {
  return (
    <div className="flex justify-start py-2 sm:py-0 items-center bg-accentCyan rounded-xl">
      <h1 className="text-primary/20 text-[50px] sm:text-[100px] font-black px-6 leading-tight w-1/6">
        {num}
      </h1>
      <h3 className="text-primary text-s2 sm:text-h3 font-semibold w-5/6 text-start px-4">
        {text}
      </h3>
    </div>
  );
}

export default StepItem;
