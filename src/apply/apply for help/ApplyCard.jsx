import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";

function ApplyCard({ children, link }) {
  const navigate = useNavigate();
  return (
    <div className="h-max tab:h-[600px] laptop:h-[500px] w-full rounded-xl shadow-xl">
      {children}
      <div className="h-[15%] px-4 py-4 ">
        <Button bg={"bg-accentRed"} onClick={() => navigate(`/${link}`)}>
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default ApplyCard;
