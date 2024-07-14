import { useNavigate } from "react-router-dom";
import RoundedButton from "../ui/RoundedButton";

function ThanksGiving({ response }) {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-accentPurple py-[5%] mx-[4%] my-[4%] rounded-xl relative overflow-hidden`}
    >
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -bottom-14 -left-14 bg-gradient-to-t from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -top-14 -right-14 bg-gradient-to-b from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <h2 className="w-5/6 laptop:w-3/5 m-auto text-center text-primary text-s2 sm:text-h4 laptop:text-h3 font-bold font-pally py-6 relative">
        {`Thank you ${response.data.name} for your interest`}
      </h2>
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-center text-primary text-paragraph sm:text-s2 laptop:text-h4 font-light font-pally py-6 relative">
        As our payment gateway is still under development you are not able to
        pay automatically. Our team will reach you as soon as possible.
      </h2>

      <div className="w-max m-auto flex items-center gap-6 relative">
        <RoundedButton
          onClick={() => navigate("/")}
          bg={"bg-primary"}
          textColor={"text-accentPurple"}
        >
          Back Home
        </RoundedButton>
        <RoundedButton
          onClick={() => navigate("/your_impact")}
          bg={"bg-primary"}
          textColor={"text-accentPurple"}
        >
          See Impact
        </RoundedButton>
      </div>
    </div>
  );
}

export default ThanksGiving;
