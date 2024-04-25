import Button from "./Button";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.png";
import CardItem from "./CardItem";
function Cards() {
  return (
    <div className="w-5/6 m-auto py-12 mb-10">
      <h3 className="text-accentCyan text-2xl font-semibold py-2">
        Lorem ipsum dolor
      </h3>
      <div className="flex justify-between items-center pb-10">
        <h1 className="text-[55px] font-pally font-bold text-secondary">
          Lorem ipsum dolor sit amet
        </h1>
        <Button bg={"bg-accentRed"}>view all stories</Button>
      </div>
      <div className="flex justify-between items-center">
        <CardItem
          img={story2}
          title={" Lorem ipsum dolor"}
          buttonText={"give zakat"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla magna ut. Viverra ultricies sit quis facilisi id id tristique tempus."
          }
        />
        <CardItem
          img={story1}
          title={" Lorem ipsum dolor"}
          buttonText={"give zakat"}
          text={
            "Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla magna ut. Viverra ultricies sit quis facilisi id id tristique tempus."
          }
        />
        <CardItem
          img={story3}
          title={" Lorem ipsum dolor"}
          buttonText={"give zakat"}
          text={
            "Est gravida vitae leo nulla magna ut. Viverra ultricies sit quis facilisi id id tristique tempus."
          }
        />
      </div>
    </div>
  );
}

export default Cards;
