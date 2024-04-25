import Button from "./Button";

function CardItem({ img, title, buttonText, text }) {
  return (
    <div className="p-4 w-[30%] h-[400px] shadow-[10px_35px_60px_5px_rgba(0,0,0,0.15)] rounded-xl">
      <div className="h-[60%] w-full">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={img}
          alt="story1"
        />
        <div className="h-[40%]">
          <div className="flex justify-center -mt-6">
            <Button bg={"bg-accentCyan shadow-lg border border-primary"}>
              {buttonText}
            </Button>
          </div>
          <h2 className="text-2xl text-secondary font-semibold py-2">
            {title}
          </h2>
          <p className="text-secondary/70 text-sm font-normal w-4/5">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
