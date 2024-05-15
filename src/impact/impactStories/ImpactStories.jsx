import ImpactLayout from "../ImpactLayout";
import ImpactNumbers from "../ImpactNumbers";
import StoriesHero from "./StoriesHero";
import StoriesPeople from "./StoriesPeople";

function ImpactStories() {
  return (
    <ImpactLayout tab={2}>
      <StoriesHero />
      <StoriesPeople />
      <ImpactNumbers bg={"bg-accentCyan/10"} />
    </ImpactLayout>
  );
}

export default ImpactStories;
