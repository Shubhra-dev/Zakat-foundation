function StepItem({ num, text }) {
  return (
    <div className="flex justify-start items-center bg-accentCyan rounded-xl">
      <h1 className="text-primary/20 text-[100px] font-black px-6 leading-tight w-1/6">
        {num}
      </h1>
      <h3 className="text-primary text-3xl font-semibold w-5/6 text-start pr-4">
        {text}
      </h3>
    </div>
  );
}

export default StepItem;
