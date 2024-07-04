function GuideStepItem({ num, text, width }) {
  return (
    <div className={`p-2 sm:p-4 bg-accentCyan ${width} rounded-xl text-center`}>
      <h2 className="text-primary/30 text-title tab:text-6xl laptop:text-7xl font-bold pb-4">
        {num}
      </h2>
      <p className="text-primary text-paragraph laptop:text-s2 font-semibold">
        {text}
      </p>
    </div>
  );
}

export default GuideStepItem;
