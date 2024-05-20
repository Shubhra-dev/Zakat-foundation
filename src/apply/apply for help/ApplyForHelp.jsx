import StoryContainer from "../../impact/your_Impact/StoryContainer";
import ApplyLayout from "../ApplyLayout";
import ApplyCardContainer from "./ApplyCardContainer";
import ApplyHero from "./ApplyHero";
import Partnerships from "./Partnerships";
import ApplyHelp from "../../give/giveZakat/ApplyHelp";

function ApplyForHelp() {
  return (
    <ApplyLayout tab={1}>
      <ApplyHero />
      <div className="text-center py-[3%] bg-primary px-[3%]">
        <h4 className="text-secondary text-xl font-normal uppercase text-center pb-4">
          Apply for zakat
        </h4>
        <h2 className="w-4/5 m-auto text-secondary font-semibold text-title font-pally pb-4">
          You can get help in these three areas
        </h2>
        <p className="w-4/5 m-auto font-normal text-paragraph text-secondary/80 pb-[3%]">
          To apply for help from Zakat Foundation Bangladesh you must have your
          own email address, mobile phone number and a device able to connect to
          the internet.
        </p>
      </div>
      <ApplyCardContainer />
      <Partnerships />
      <StoryContainer />
      <ApplyHelp />
    </ApplyLayout>
  );
}

export default ApplyForHelp;
