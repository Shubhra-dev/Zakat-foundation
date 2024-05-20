import Button from "../../ui/Button";

function ApplyCard({ children }) {
  return (
    <div className="h-[550px] laptop:h-[450px] w-1/3 rounded-xl shadow-xl">
      {children}
      <div className="h-[15%] px-4 pt-4">
        <Button bg={"bg-accentRed"}>Learn More</Button>
      </div>
    </div>
  );
}

export default ApplyCard;
