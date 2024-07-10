import GetTouch from "../../give/givingfaq/GetTouch";
import ZakatLayout from "../ZakatLayout";
import AboutZakatHero from "./AboutZakatHero";
import Midsections from "./Midsections";

function AboutZakat() {
  return (
    <ZakatLayout tab={1}>
      <AboutZakatHero />
      <Midsections />
      <GetTouch
        button1={"Give zakat"}
        button2={"Apply for help"}
        b1link={"zakat/give"}
        b2link={"apply_help"}
      />
    </ZakatLayout>
  );
}

export default AboutZakat;
