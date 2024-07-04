import ImageCard from "../../ui/ImageCard";
import ApplyLayout from "../ApplyLayout";
import TitleSection from "../apply for help/TitleSection";
import HardshipHero from "./HardshipHero";
import hardship1 from "../../assets/hardship1.jpg";
import FAQSection from "../FAQSection";
import ContactUs from "../../calculate/calculator/ContactUs";

function HardshipRelief() {
  return (
    <ApplyLayout tab={2}>
      <HardshipHero />
      <TitleSection
        buttonText={"join waiting list"}
        title="Get help with the essential living expenses"
      >
        <p className="w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-light laptop:text-paragraph text-secondary/80 pb-2">
          The Hardship Relief Fund provides grants for basic living expenses to
          vulnerable Muslims in Bangladesh who are struggling to cover their
          essential costs.
        </p>
        <p className="w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-light laptop:text-paragraph text-secondary/80">
          This is a two-step process. Please click the button below to express
          your interest in Zakat. You will receive an email within 3-6 weeks to
          confirm if you are eligible to apply for Zakat.
        </p>
      </TitleSection>
      <div className="py-4 px-[3%]">
        <ImageCard
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%]"}
          imgPosition={"left"}
          img={hardship1}
          rounded={true}
        >
          <h1 className="text-h3 sm:text-s1 laptop:text-title text-center sm:text-left text-secondary font-pally font-bold pb-4">
            Support for those in need of assistance
          </h1>
          <p className="font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
            This fund is designed to assist individuals and families who require
            support with essential necessities such as food, clothing, or
            heating. Its aim is to help you regain stability so that you can
            begin rebuilding a better life.
          </p>
        </ImageCard>
      </div>
      <FAQSection />
      <ContactUs
        textColor={"text-accentPurple"}
        bg={"bg-primary"}
        buttonBg={"bg-accentPurple"}
      />
    </ApplyLayout>
  );
}

export default HardshipRelief;
