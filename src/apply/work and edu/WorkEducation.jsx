import ImageCard from "../../ui/ImageCard";
import ApplyLayout from "../ApplyLayout";
import TitleSection from "../apply for help/TitleSection";
import work1 from "../../assets/work1.jpg";
import FAQSection from "../FAQSection";
import ContactUs from "../../calculate/calculator/ContactUs";
import WorkHero from "./WorkHero";

function WorkEducation() {
  return (
    <ApplyLayout tab={4}>
      <WorkHero />
      <TitleSection buttonText={"apply"} title="Work & Education Fund">
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
          Increasingly tough economic conditions have put many people in a
          position of financial hardship. We understand how difficult this is
          for families across the UK.
        </p>
        <p className="w-11/12 sm:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80">
          We can help you get the qualifications you need to find a long-term
          career and increase your earning potential so that you can look after
          yourself and your family independently.
        </p>
      </TitleSection>
      <div className="py-4 px-[3%]">
        <ImageCard
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%]"}
          imgPosition={"left"}
          img={work1}
          rounded={true}
        >
          <h1 className="text-h3 sm:text-title text-secondary font-pally font-bold pb-4">
            Training for skills and a better future
          </h1>
          <p className="font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
            The grant will support you to work in your desired field and you
            will have the added reassurance of job security and stability, God
            willing. You can get more information on potential careers from the
            National Careers Service.
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

export default WorkEducation;
