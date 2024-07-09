import Button from "../../ui/Button";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function StoryCardItem({ img, alt, heading, text, id }) {
  return (
    <EqualHeightFlexContainer addedClass="w-full h-full tab:w-[48%] items-start my-2">
      <div className="w-[45%] rounded-xl">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-fill  rounded-md"
        />
      </div>
      <div className="w-[55%] h-full flex flex-col justify-between text-start px-[5%] py-2">
        <div>
          <h3 className="text-s2 sm:text-h4 laptop:text-h3 font-bold text-secondary pb-2 sm:pb-4 tab:pb-[10%]">
            {heading}
          </h3>
          <p className="text-[12px] sm:text-base text-secondary/60 font-normal py-2">
            {text}
          </p>
        </div>
        <Button
          bg={"bg-primary text-start"}
          textColor={"text-accentRed"}
          padding={"px-0 py-0"}
          onClick={() =>
            window.open(`https://blog.alzakati.com/blog/${id}`, "_blank")
          }
        >
          Read More
        </Button>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default StoryCardItem;
