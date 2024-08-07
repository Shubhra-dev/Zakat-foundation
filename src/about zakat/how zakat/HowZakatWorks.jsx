import ZakatLayout from "../ZakatLayout";
import HowHero from "./HowHero";
import HowMidsection from "./HowMidSection";
import GetTouch from "../../give/givingfaq/GetTouch";
import WorkingOut from "./WorkingOut";

function HowZakatWorks() {
  return (
    <ZakatLayout tab={3}>
      <HowHero />
      <HowMidsection />
      <WorkingOut />
      <GetTouch
        button1={"Give zakat"}
        b1link={"zakat/give"}
        b2link={"apply_help"}
        button2={"Apply for help"}
      />
    </ZakatLayout>
  );
}

export default HowZakatWorks;
