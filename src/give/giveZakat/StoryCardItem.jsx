import Button from "../../ui/Button";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function StoryCardItem({ img, alt, heading, text }) {
  return (
    <EqualHeightFlexContainer addedClass="w-1/2 flex items-start h-[300px]">
      <div className="w-1/2 rounded-xl">
        <img src={img} alt={alt} className="w-full h-full object-fill" />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between text-start px-[5%] py-2">
        <div>
          <h3 className="text-3xl font-bold text-secondary pb-[10%]">
            {heading}
          </h3>
          <p className="text-base text-secondary/60 font-normal">{text}</p>
        </div>
        <Button
          bg={"bg-primary text-start"}
          textColor={"text-accentRed"}
          padding={"px-0 py-0"}
        >
          Read More
        </Button>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default StoryCardItem;
