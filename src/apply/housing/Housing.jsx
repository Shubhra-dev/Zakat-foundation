import ImageCard from "../../ui/ImageCard";
import ApplyLayout from "../ApplyLayout";
import TitleSection from "../apply for help/TitleSection";
import housing1 from "../../assets/housing1.jpg";
import FAQSection from "../FAQSection";
import ContactUs from "../../calculate/calculator/ContactUs";
import HousingHero from "./HousingHero";

function Housing() {
  return (
    <ApplyLayout tab={3}>
      <HousingHero />
      <TitleSection
        buttonText={"join waiting list"}
        title="Get Help with Housing Costs"
      >
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
          The Housing Fund provides Zakat grants to assist Muslims in Bangladesh
          who require support to secure affordable, livable, and safe
          accommodation.
        </p>
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80">
          This process involves two steps. Please click the button below to
          express your interest in Zakat. You will receive an email within 3-6
          weeks to confirm if you are eligible to apply for Zakat.
        </p>
      </TitleSection>
      <div className="py-4 px-[3%]">
        <ImageCard
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%]"}
          imgPosition={"left"}
          img={housing1}
          rounded={true}
        >
          <h1 className="text-h3 sm:text-s1 laptop:text-title text-secondary font-pally font-bold pb-4">
            Keeping families safe under a roof
          </h1>
          <p className="font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
            The Housing Fund offers assistance with Council Tax, rent arrears,
            and moving-in support to address household needs.
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

export default Housing;
