import { useNavigate } from "react-router-dom";
import sadaqahHero from "../../assets/sadaqahHero.png";
import RoundedButton from "../../ui/RoundedButton";
function SadaqahHero() {
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${sadaqahHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[7%] text-center">
        <h2 className="text-primary font-bold text-h3 w-5/6 laptop:4/5 m-auto sm:text-title laptop:text-bigTitle leading-tight font-pally">
          Make an impact by donating Zakat in your community.
        </h2>
        <p className="text-small sm:text-s2 font-light text-primary w-5/6 laptop:w-1/2 m-auto pb-6">
          Your donation of ৳1 in Sadaqah and help us generate ৳6 in Zakat. Make
          a single contribution or set up recurring donations for the months
          ahead.
        </p>
        <RoundedButton
          onClick={() => navigate("/zakat/give")}
          bg={"bg-accentPurple"}
          textColor={"text-primary"}
        >
          Donate
        </RoundedButton>
      </div>
    </div>
  );
}

export default SadaqahHero;
