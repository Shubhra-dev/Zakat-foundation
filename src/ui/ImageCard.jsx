import EqualHeightFlexContainer from "./EqualHeightFlexContainer";

function ImageCard({ children, img }) {
  return (
    <EqualHeightFlexContainer addedClass={"pb-[5%]"}>
      <div className="p-4 w-1/2">{children}</div>
      <div
        className="w-1/2 bg-cover bg-top"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default ImageCard;
