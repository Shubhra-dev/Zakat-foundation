import GiveLayout from "../GiveLayout";
import GetTouch from "./GetTouch";
import GivingFAQContainer from "./GivingFAQContainer";
import GivingFAQHero from "./GivingFAQHero";

function GivingFAQ() {
  return (
    <GiveLayout tab={4}>
      <GivingFAQHero />
      <GivingFAQContainer />
      <GetTouch />
    </GiveLayout>
  );
}

export default GivingFAQ;
