import { useNavigate } from "react-router-dom";
import RoundedButton from "../../ui/RoundedButton";
function DonateSadaqah() {
  const navigate = useNavigate();
  return (
    <div
      className={`bg-accentRed py-[5%] mx-[4%] my-[4%] rounded-xl relative overflow-hidden`}
    >
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -bottom-14 -left-14 bg-gradient-to-t from-accentRed to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -top-14 -right-14 bg-gradient-to-b from-accentRed to-primary/20 rounded-full`}
      ></div>
      <h2 className="w-5/6 laptop:w-3/5 m-auto text-center text-primary text-h3 sm:text-s1 laptop:text-title font-bold font-pally py-6 relative">
        Donate to the AL-ZAKATI Growth Fund Today!
      </h2>
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-center text-primary text-s3 sm:text-s2 laptop:text-[25px] font-light font-pally py-6 relative">
        Join us in our mission to connect every Muslim through Zakat. By
        donating to the AL-ZAKATI Growth Fund, you’re making a powerful
        contribution to the future of the Muslim community in Bangladesh.
        Together, we can uphold the third pillar of Islam and ensure that no one
        is left behind. <br />
        <br />
        Your generosity has the power to transform lives, uplift communities,
        and create a brighter future for all. Donate today and be part of this
        incredible journey.
      </h2>

      <div className="w-max m-auto flex items-center gap-6 relative">
        <RoundedButton
          onClick={() => navigate("/zakat/give")}
          bg={"bg-primary"}
          textColor={"text-accentRed"}
        >
          Give Now
        </RoundedButton>
      </div>
    </div>
  );
}

export default DonateSadaqah;
