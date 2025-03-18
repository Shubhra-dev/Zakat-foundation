import ImpactLayout from "../ImpactLayout";
import ImpactNumbers from "../ImpactNumbers";
import ImpactHero from "./ImpactHero";
import ImpactSummary from "./ImpactSummary";
import Reasons from "./Reasons";
import StoryContainer from "./StoryContainer";

function YourImpact() {
  return (
    <ImpactLayout tab={1}>
      <ImpactHero />
      <ImpactSummary />
      <ImpactNumbers />
      <Reasons />
      <StoryContainer />
    </ImpactLayout>
  );
}

export default YourImpact;
