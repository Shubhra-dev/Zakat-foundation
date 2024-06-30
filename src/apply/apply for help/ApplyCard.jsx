import Button from "../../ui/Button";

function ApplyCard({ children }) {
  return (
    <div className="h-max sm:h-[550px] laptop:h-[450px] w-full rounded-xl shadow-xl">
      {children}
      <div className="h-[15%] px-4 py-4 ">
        <Button bg={"bg-accentRed"}>Learn More</Button>
      </div>
    </div>
  );
}

export default ApplyCard;
