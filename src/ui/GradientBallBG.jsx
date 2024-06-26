function GradientBallBG({ children, bg }) {
  return (
    <div
      className={`bg-${bg} m-[4%] py-[5%] rounded-xl -z-20 relative overflow-hidden`}
    >
      <div
        className={`h-[150px] sm:h-[350px] w-[150px] sm:w-[350px] absolute -z-10 -bottom-14 -left-14 bg-gradient-to-t from-${bg} to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[150px] sm:h-[350px] w-[150px] sm:w-[350px] absolute -z-10 -top-14 -right-14 bg-gradient-to-b from-${bg} to-primary/20 rounded-full`}
      ></div>
      {children}
    </div>
  );
}

export default GradientBallBG;
