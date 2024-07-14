import ImageCard from "../../ui/ImageCard";
import ApplyLayout from "../ApplyLayout";
import TitleSection from "../apply for help/TitleSection";
import work1 from "../../assets/work1.jpg";
import FAQSection from "../FAQSection";
import ContactUs from "../../calculate/calculator/ContactUs";
import WorkHero from "./WorkHero";
const ques1 = [
  {
    id: "faq1",
    question: "What can I get help with?",
    answer:
      "You can apply for help with:<br><br>1. <b>Training Course Fees</b><br>We can assist in covering costs for certified and reputable courses that are likely to lead to employment or better pay upon completion.<br><br>2. <b>Certification and License Fees</b><br>We can help you update or translate non-Bangladeshi certificates for use in professional courses or job applications in Bangladesh. We also assist with renewing necessary licenses for work, provided they are from an approved Bangladeshi licensing body.<br><br>3. <b>Qualification Conversion Fees</b><br>We support the costs to convert a non-Bangladeshi qualification into a Bangladeshi-recognized standard.<br><br>4. <b>Vocational Training Courses</b><br>We can fund vocational training courses up to one year in duration.",
  },
  {
    id: "faq2",
    question: "Can I apply?",
    answer:
      "To apply, you must be a Muslim living in Bangladesh and demonstrate financial need. We will assess your financial situation, including your assets, income, and expenses, to confirm eligibility.<br><br>If you are seeking asylum, on a student visa, work permit, or have no legal status in Bangladesh, you are not eligible to apply.<br><br>You must also show that you are unemployed or on a low income and unable to cover basic costs. The activity you wish to pursue must start within three months of your application.<br><br>To apply for help from Al Zakati Bangladesh, you must have your own email address, mobile phone number, and internet access.",
  },
  {
    id: "faq3",
    question: "How much help can I get?",
    answer:
      "The amount of assistance depends on your circumstances and the activity you wish to pursue. Our average grant is BDT 100,000, with a maximum of BDT 300,000. The grant is a one-time financial aid.",
  },
  {
    id: "faq4",
    question: "How long will it take to get help?",
    answer:
      "The application form takes about 20 minutes to complete. Once you submit your application with all necessary information and documents, we will decide as soon as possible. The estimated waiting time will be displayed at the beginning of your application. Note that waiting times may increase during high-demand periods.<br><br>If any information or documents are missing, your application will be delayed, and you will have up to 14 days to provide the missing details.",
  },
  {
    id: "faq5",
    question: "What happens once I have applied?",
    answer:
      "Once you submit your application, the Work Fund team will verify that all required information and documents have been provided and that you are eligible for help. If anything is missing, you will be asked to submit it within 10 days.<br><br>We will then review your financial situation to confirm eligibility and assess your skills and experience to determine if the activity will help you secure employment.<br><br>If approved, we will email you to confirm and arrange payment. If not, we will email you with the reasons for denial.",
  },
];
const ques2 = [
  {
    id: "faq6",
    question: "How many times can I apply?",
    answer:
      "You can receive one grant from the Work and Education Fund every two years.",
  },
  {
    id: "faq7",
    question: "What information and documents do I need to provide?",
    answer:
      "To apply for help, you need to provide:<br><br>- <b>Photo ID</b> for yourself, your spouse, and children under 18. Accepted IDs include a passport, driving licence, or other government-issued documents.<br><br>- <b>Bank Statements</b><br>We require the most recent three full months of bank statements for all your accounts. For example, if you apply on January 2nd, you need to provide statements for October, November, and December.<br><br>- <b>Your CV</b><br>An up-to-date CV that includes your work and education history and any other relevant information. If you don't have an up-to-date CV, you can get help here.<br><br>For training courses, certification, and license fees, you also need to provide:<br><br>- <b>Certificate of Highest Qualification</b><br>A copy of the certificate for your highest qualification.<br><br>For qualification conversion fees, you also need to provide:<br><br>- <b>Certificate of Existing Qualification</b><br>The certificate for the qualification you wish to convert.",
  },
  {
    id: "faq8",
    question: "How will the help be given?",
    answer:
      "For courses, certifications, licenses, and conversion fees, your grant will be paid directly to the service provider. You need to provide an invoice from the provider for payment.",
  },
  {
    id: "faq9",
    question: "What if I am not happy with your service?",
    answer:
      "While we strive to help everyone who applies, we are committed to providing a high-quality service to all applicants. If something goes wrong, please let us know so we can improve our service.<br><br>If you are dissatisfied with any part of our service, please contact us via the link at the bottom of this page.<br><br><b>What will happen next?</b><br>- We will acknowledge receipt of your complaint within 5 working days.<br>- We will investigate, review any evidence, and consult relevant staff if necessary.<br>- We aim to respond to your complaint within 10 working days. If this is not possible, we will provide an update.",
  },
];

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
      <FAQSection ques1={ques1} ques2={ques2} />
      <ContactUs
        textColor={"text-accentPurple"}
        bg={"bg-primary"}
        buttonBg={"bg-accentPurple"}
      />
    </ApplyLayout>
  );
}

export default WorkEducation;
