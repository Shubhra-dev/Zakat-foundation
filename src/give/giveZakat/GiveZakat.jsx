import GiveLayout from "../GiveLayout";
import ApplyHelp from "./ApplyHelp";
import GiveCards from "./GiveCards";
import GiveZakatHero from "./GiveZakatHero";
import StoryCards from "./StoryCards";
import SummaryGiveZakat from "./SummaryGiveZakat";
import WhyNeed from "./WhyNeed";
import ZakatNumbers from "./ZakatNumbers";

function GiveZakat() {
  return (
    <GiveLayout tab={1}>
      <GiveZakatHero />
      <SummaryGiveZakat />
      <GiveCards />
      <ZakatNumbers />
      <WhyNeed />
      <StoryCards />
      <ApplyHelp />
    </GiveLayout>
  );
}

export default GiveZakat;
