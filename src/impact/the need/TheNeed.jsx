import GetTouch from "../../give/givingfaq/GetTouch";
import ImpactLayout from "../ImpactLayout";
import NeedHero from "./NeedHero";
import ProblemAndSolution from "./ProblemAndSolution";

function TheNeed() {
  return (
    <ImpactLayout tab={4}>
      <NeedHero />
      <ProblemAndSolution />
      <GetTouch my="my-[2%]" />
    </ImpactLayout>
  );
}

export default TheNeed;
