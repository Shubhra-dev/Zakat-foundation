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
        <p className="w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
          In these increasingly tough economic conditions, it has become quite
          difficult for many people. Thay have been going through financial
          hardships. We can recognise the challenges the families are facing all
          throughout Bangladesh.
        </p>
        <p className="w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph text-secondary/80">
          We can provide you with the assistance you require in securing a long
          term career and secure an income source for financial independence.
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
          <h1 className="text-h3 sm:text-s1 laptop:text-title text-secondary font-pally font-bold pb-4">
            Acquire skills for a better future
          </h1>
          <p className="font-normal text-s3 sm:text-paragraph text-secondary/80 pb-2">
            The grant will help you pursue your desired career path, providing
            the added reassurance of job security and financial stability, God
            willing.
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
