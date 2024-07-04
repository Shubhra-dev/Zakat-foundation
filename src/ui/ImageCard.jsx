import EqualHeightFlexContainer from "./EqualHeightFlexContainer";

function ImageCard({
  children,
  img,
  imgPosition,
  w1,
  w2,
  bg,
  rounded,
  padding,
  bgPosition,
}) {
  return (
    <EqualHeightFlexContainer
      addedClass={`${
        padding ? padding : "pb-0"
      } flex-col sm:flex-row bg-gray-300 ${rounded ? "rounded-xl" : ""}`}
    >
      {(imgPosition === "right" || !imgPosition) && (
        <>
          <div className={`${bg ? bg : ""} p-8 ${w1 ? w1 : "w-full sm:w-1/2"}`}>
            {children}
          </div>

          <div
            className={`${w2 ? w2 : "w-full sm:w-1/2"} ${
              rounded ? "rounded-xl" : ""
            } bg-cover ${bgPosition ? bgPosition : "bg-center"}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </>
      )}
      {imgPosition == "left" && (
        <>
          <div
            className={`${w2 ? w2 : "w-full sm:w-1/2"} ${
              rounded ? "rounded-xl" : ""
            } bg-cover ${bgPosition ? bgPosition : "bg-center"}`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className={`${bg ? bg : ""} p-8 ${w1 ? w1 : "w-1/2"}`}>
            {children}
          </div>
        </>
      )}
    </EqualHeightFlexContainer>
  );
}

export default ImageCard;
