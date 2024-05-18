import GetTouch from "../../give/givingfaq/GetTouch";
import ImpactLayout from "../ImpactLayout";
import HowHero from "./HowHero";
import HowImageCard from "./HowImageCard";
import WhatHappens from "./WhatHappens";

function HowYouHelp() {
  return (
    <ImpactLayout tab={3}>
      <HowHero />
      <HowImageCard />
      <WhatHappens />
      <GetTouch />
    </ImpactLayout>
  );
}

export default HowYouHelp;
