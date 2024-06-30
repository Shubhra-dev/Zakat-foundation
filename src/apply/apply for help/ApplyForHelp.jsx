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
        <h4 className="text-secondary text-s3 sm:text-s2 font-normal uppercase text-center pb-2 sm:pb-4">
          Apply for zakat
        </h4>
        <h2 className="w-11/12 sm:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-title font-pally pb-2 sm:pb-4">
          You can get help in these three areas
        </h2>
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80 pb-[3%]">
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
