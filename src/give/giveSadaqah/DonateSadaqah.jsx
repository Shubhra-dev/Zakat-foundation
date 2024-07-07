import { useNavigate } from "react-router-dom";
import RoundedButton from "../../ui/RoundedButton";
function DonateSadaqah() {
  const navigate = useNavigate();
  return (
    // <GradientBallBG bg={"accentRed"}>
    //   <h2 className="relative text-primary font-bold text-h3 sm:text-s1 laptop:text-title font-pally text-center w-5/6 m-auto tab:w-full tab:m-0">
    //     Donate to the AL-ZAKATI Growth Fund Today!
    //   </h2>
    //   <p className="relative text-primary text-s3 sm:text-paragraph laptop:text-s2 font-light py-4 w-11/12 laptop:w-8/12 m-auto text-center">
    //     Join us on our mission to connect every Muslim in the UK through Zakat!
    //     When you donate to the NZF Growth Fund, you’re making a powerful
    //     contribution to the future of the Muslim community in the UK and
    //     upholding the third pillar of Islam right where you live.
    //   </p>
    //   <p className="relative text-primary text-s3 sm:text-paragraph laptop:text-s2 font-light py-4 w-11/2 laptop:w-8/12 m-auto text-center">
    //     You’re helping us grow and improve our service so we can be there for
    //     every Muslim in their moment of need.
    //   </p>
    //   <div className="py-4 w-max m-auto relative">
    //     <RoundedButton textColor={"text-accentRed"} bg={"bg-primary"}>
    //       Give Now
    //     </RoundedButton>
    //   </div>
    // </GradientBallBG>
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
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-center text-primary text-s3 sm:text-s2 laptop:text-s1 font-light font-pally py-6 relative">
        Join us on our mission to connect every Muslim in the UK through Zakat!
        When you donate to the NZF Growth Fund, you’re making a powerful
        contribution to the future of the Muslim community in the UK and
        upholding the third pillar of Islam right where you live.
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
