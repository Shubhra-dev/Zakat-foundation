import EqualHeightFlexContainer from "./EqualHeightFlexContainer";

function ImageCard({ children, img, imgPosition, w1, w2, bg, rounded }) {
  return (
    <EqualHeightFlexContainer addedClass={"pb-[5%]"}>
      {(imgPosition === "right" || !imgPosition) && (
        <>
          <div className={`${bg ? bg : ""} p-8 ${w1 ? w1 : "w-1/2"}`}>
            {children}
          </div>

          <div
            className={`${w2 ? w2 : "w-1/2"} ${
              rounded ? "rounded-xl" : ""
            } bg-cover bg-top`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </>
      )}
      {imgPosition == "left" && (
        <>
          <div
            className={`${w2 ? w2 : "w-1/2"} ${
              rounded ? "rounded-xl" : ""
            } bg-cover bg-top`}
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
