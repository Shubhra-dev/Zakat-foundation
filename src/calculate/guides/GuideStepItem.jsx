function GuideStepItem({ num, text, width }) {
  return (
    <div className={`p-4 bg-accentCyan ${width} rounded-xl text-center`}>
      <h2 className="text-primary/30 text-7xl font-bold pb-4">{num}</h2>
      <p className="text-primary text-xl font-semibold">{text}</p>
    </div>
  );
}

export default GuideStepItem;
