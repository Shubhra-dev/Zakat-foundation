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
        <p className="w-4/5 m-auto font-normal text-paragraph text-secondary/80 pb-2">
          The Housing Fund gives Zakat grants to help Muslims in the UK who need
          support to live in affordable, liveable and safe accommodation.
        </p>
        <p className="w-4/5 m-auto font-normal text-paragraph text-secondary/80">
          This is a two-step process, please press the button below to register
          your interest in Zakat. You will receive an email within 3-6 weeks
          about whether you can apply for Zakat.
        </p>
      </TitleSection>
      <div className="py-4 px-[3%]">
        <ImageCard
          w1={"w-[60%]"}
          w2={"w-[40%]"}
          imgPosition={"left"}
          img={housing1}
          rounded={true}
        >
          <h1 className="text-title text-secondary font-pally font-bold pb-4">
            Keeping families safe and secure in their homes
          </h1>
          <p className="font-normal text-paragraph text-secondary/80 pb-2">
            The Housing Fund provides support with Council Tax, Rent arrears,
            and Moving-in support to help with household needs.
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
