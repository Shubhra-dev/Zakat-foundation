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
        title="Get help with basic living costs"
      >
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
          The Hardship Relief Fund gives grants for basic costs to vulnerable
          Muslims in the Bangladesh who are unable to pay for basic living
          costs.
        </p>
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80">
          This is a two-step process, please press the button below to register
          your interest in Zakat. You will receive an email within 3-6 weeks
          about whether you can apply for Zakat.
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
          <h1 className="text-h3 sm:text-title text-center sm:text-left text-secondary font-pally font-bold pb-4">
            Support for those in need now
          </h1>
          <p className="font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
            This fund is for people and families in need of support for basic
            essentials like food, clothing or heating. This money aims to get
            you back on your feet so you can start to build a better life.
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
