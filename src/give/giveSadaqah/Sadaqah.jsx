import GradientBallBG from "../../ui/GradientBallBG";
import RoundedButton from "../../ui/RoundedButton";
import GiveLayout from "../GiveLayout";
import Empower from "./Empower";
import SadaqahCards from "./SadaqahCards";
import SadaqahHero from "./SadaqahHero";

function Sadaqah() {
  return (
    <GiveLayout tab={2}>
      <SadaqahHero />
      <Empower />
      <SadaqahCards />

      <GradientBallBG bg={"accentRed"}>
        <h2 className="text-primary font-bold text-[50px] font-pally text-center">
          Donate to the ZF BD Growth Fund Today!
        </h2>
        <p className="text-primary text-xl font-light py-4 w-8/12 m-auto text-center">
          Join us on our mission to connect every Muslim in the UK through
          Zakat! When you donate to the NZF Growth Fund, you’re making a
          powerful contribution to the future of the Muslim community in the UK
          and upholding the third pillar of Islam right where you live.
        </p>
        <p className="text-primary text-xl font-light py-4 w-8/12 m-auto text-center">
          You’re helping us grow and improve our service so we can be there for
          every Muslim in their moment of need.
        </p>
        <div className="py-4 w-max m-auto">
          <RoundedButton textColor={"text-accentRed"} bg={"bg-primary"}>
            Give Now
          </RoundedButton>
        </div>
      </GradientBallBG>
    </GiveLayout>
  );
}

export default Sadaqah;
