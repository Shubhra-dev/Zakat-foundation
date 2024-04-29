function GradientBallBG({ children, bg }) {
  return (
    <div
      className={`bg-${bg} m-[4%] py-[5%] rounded-xl relative -z-20 overflow-hidden`}
    >
      <div
        className={`h-[350px] w-[350px] absolute -bottom-14 -left-14 bg-gradient-to-t from-${bg} to-primary/20 rounded-full -z-10`}
      ></div>
      <div
        className={`h-[350px] w-[350px] absolute -top-14 -right-14 bg-gradient-to-b from-${bg} to-primary/20 -z-10 rounded-full`}
      ></div>
      {children}
    </div>
  );
}

export default GradientBallBG;
