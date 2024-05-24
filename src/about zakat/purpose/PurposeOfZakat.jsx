import ZakatLayout from "../ZakatLayout";
import PurposeHero from "./PurposeHero";
import Midsection from "./Midsection";
import GetTouch from "../../give/givingfaq/GetTouch";
function PurposeOfZakat() {
  return (
    <ZakatLayout tab={2}>
      <PurposeHero />
      <Midsection />
      <GetTouch button1={"Give zakat"} button2={"Apply for help"} />
    </ZakatLayout>
  );
}

export default PurposeOfZakat;
