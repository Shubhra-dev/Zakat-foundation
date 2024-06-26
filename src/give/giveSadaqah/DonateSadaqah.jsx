import GradientBallBG from "../../ui/GradientBallBG";
import RoundedButton from "../../ui/RoundedButton";
function DonateSadaqah() {
  return (
    <GradientBallBG bg={"accentRed"}>
      <h2 className="text-primary font-bold text-h3 sm:text-title font-pally text-center w-5/6 m-auto sm:w-full sm:m-0">
        Donate to the ZF BD Growth Fund Today!
      </h2>
      <p className="text-primary text-s3 sm:text-s2 font-light py-4 w-11/12 sm:w-8/12 m-auto text-center">
        Join us on our mission to connect every Muslim in the UK through Zakat!
        When you donate to the NZF Growth Fund, you’re making a powerful
        contribution to the future of the Muslim community in the UK and
        upholding the third pillar of Islam right where you live.
      </p>
      <p className="text-primary text-s3 sm:text-s2 font-light py-4 w-11/2 sm:w-8/12 m-auto text-center">
        You’re helping us grow and improve our service so we can be there for
        every Muslim in their moment of need.
      </p>
      <div className="py-4 w-max m-auto">
        <RoundedButton textColor={"text-accentRed"} bg={"bg-primary"}>
          Give Now
        </RoundedButton>
      </div>
    </GradientBallBG>
  );
}

export default DonateSadaqah;
