import sadaqahHero from "../../assets/sadaqahHero.png";
import RoundedButton from "../../ui/RoundedButton";
function SadaqahHero() {
  return (
    <div
      className="bg-cover bg-top w-full"
      style={{ backgroundImage: `url(${sadaqahHero})` }}
    >
      <div className="h-full w-full bg-black/55 pt-[10%] pb-[7%] text-center">
        <h2 className="text-primary font-semibold text-[70px] font-pally">
          Bring Zakat to life where you live
        </h2>
        <p className="text-xl font-light text-primary w-1/2 m-auto pb-6">
          Every £1 in Sadaqah enables us to raise £6 in Zakat. Make a one-off
          donation or automate it across the upcoming months.
        </p>
        <RoundedButton bg={"bg-primary"} textColor={"text-accentPurple"}>
          Donate
        </RoundedButton>
      </div>
    </div>
  );
}

export default SadaqahHero;
