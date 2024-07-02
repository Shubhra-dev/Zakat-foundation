import Button from "./Button";

function CardItem({ img, title, text }) {
  return (
    <div className="p-4 w-full laptop:w-[30%] h-[350px] sm:h-[450px] laptop:h-[600px] shadow-[10px_35px_60px_5px_rgba(0,0,0,0.15)] rounded-xl">
      <div className="h-[50%] sm:h-[60%] w-full">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={img}
          alt="story1"
        />
        <div className="h-[50%] sm:h-[40%] text-center">
          <div className="flex justify-center -mt-4 sm:-mt-6">
            <Button bg={"bg-accentCyan shadow-lg border border-primary"}>
              give zakat
            </Button>
          </div>
          <h2 className="text-light sm:text-h4 text-secondary font-semibold py-2">
            {title}
          </h2>
          <p className="text-secondary/70 text-s3 sm:text-paragraph font-normal w-full ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
