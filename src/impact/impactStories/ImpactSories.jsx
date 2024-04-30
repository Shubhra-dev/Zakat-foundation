import StoryItems from "../../give/StoryItems";
import ImpactLayout from "../ImpactLayout";
import ImpactNumbers from "../ImpactNumbers";
import ImpactHero from "./ImpactHero";
import Reasons from "./Reasons";

function ImpactSories() {
  return (
    <ImpactLayout tab={1}>
      <ImpactHero />
      <ImpactNumbers />
      <Reasons />
      <div className="text-center py-[4%] bg-primary px-[3%]">
        <h2 className="text-secondary font-semibold text-[55px] font-pally pb-4">
          How you’ve impacted peoples lives
        </h2>
        <p className="w-3/5 m-auto font-normal text-xl text-secondary/80 pb-[3%]">
          Your Zakat has made a significant impact, lifting individuals out of
          poverty, fostering educational opportunities, and paving the way for
          self-sufficiency and community development
        </p>
        <StoryItems />
      </div>
    </ImpactLayout>
  );
}

export default ImpactSories;
