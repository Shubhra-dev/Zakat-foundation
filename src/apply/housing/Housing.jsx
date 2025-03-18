import ImageCard from "../../ui/ImageCard";
import ApplyLayout from "../ApplyLayout";
import TitleSection from "../apply for help/TitleSection";
import housing1 from "../../assets/housing1.jpg";
import FAQSection from "../FAQSection";
import ContactUs from "../../calculate/calculator/ContactUs";
import HousingHero from "./HousingHero";
const ques1 = [
  {
    id: "faq1",
    question: "What can I get help with?",
    answer:
      "You can apply for help with: <br> Rent Arrears – Rent owed on your current home.<br> Council Tax Arrears – Council Tax debts.<br> Moving-in Grant – To furnish your new home.",
  },
  {
    id: "faq2",
    question: "Can I apply?",
    answer:
      "To apply, you must be a Muslim residing in Bangladesh and demonstrate financial hardship in covering the housing costs for which you are seeking assistance. We will assess your financial status, including your income and monthly expenses.<br>If you are an asylum seeker, a full-time student, on a student visa, work permit, or lack legal status in Bangladesh, you are ineligible to apply.<br>To apply for help from Al Zakati Bangladesh, you must have your own email address, mobile phone number, and internet access.<br>For Rent Arrears:<br>To apply for help with rent arrears, the rent owed must be for your current residence. Additionally:<br>- Your tenancy must be secured, or an Assured Shorthold Tenancy for a minimum of 6 months.<br>- We will assess your income and rent to ensure you can afford your rent in the future.<br>For Council Tax Arrears:<br>You need to be at least 3 months behind on your council tax payments. Your most recent statement should be dated within 6 weeks of your application.<br>For a Moving-in Grant:<br>To receive funds for furnishing and decorating your new home, you need a signed tenancy agreement showing either:<br>1. You moved into a new home within the last 6 months before your Al Zakati application.<br>2. You will move into your new home within 1 month of your Al Zakati application.",
  },
  {
    id: "faq3",
    question: "How much help can I get?",
    answer:
      "For rent or council tax arrears, we can provide up to BDT 7,00,000. For moving-in support, we can provide between BDT 40,000 to BDT 1,20,000, depending on your family size.",
  },
  {
    id: "faq4",
    question: "How long will it take to get help?",
    answer:
      "Our process involves two steps:<br>1. After registering, you will be notified via email whether you can apply or if we are at capacity. This email will be sent within 3-6 weeks of joining the waiting list.<br>2. If we are at capacity, you may reapply to the waiting list after 1 month. If invited to apply, you have 1 week to complete your application form. Once submitted, we will respond within 2-3 weeks.",
  },
  {
    id: "faq5",
    question: "What happens once I have applied?",
    answer:
      "Once your application is submitted, our Housing team will ensure all required information and documents are provided and that you meet eligibility criteria. If anything is missing, you will be asked to provide it within 14 days.<br>We will then review your financial situation to confirm if we can assist you. Based on the type of help needed, we will assess the affordability of your accommodation and decide accordingly.<br>If approved, we will email you to confirm and arrange payment. If not, we will email you with the reason for denial.",
  },
];
const ques2 = [
  {
    id: "faq6",
    question: "How many times can I apply?",
    answer:
      "We can provide one Zakat grant from the Housing Fund every 3 years, per need. For instance, if you receive an Arrears Zakat grant in January 2024, you cannot apply for another Arrears Zakat grant until January 2027. However, you can apply for Moving-in grants at any time, provided you have not received more than BDT 7,00,000 from the Housing Fund within 12 months.",
  },
  {
    id: "faq7",
    question: "What information and documents do I need to provide?",
    answer:
      "You will need to provide:<br>- Photo ID for yourself, your spouse, and children under 18 (passport, driving licence, or official document).<br>- Bank statements for the last 3 full months.<br>For Rent Arrears:<br>- Tenancy Agreement for your current residence.<br>- Rent statement showing the amount owed and the period.<br>- Housing Benefit/Universal Credit entitlement letter or print-out.<br>For Council Tax Arrears:<br>- Council Tax statement showing the amount owed and the period.<br>For Moving-in Grant:<br>- Tenancy Agreement for your new home.",
  },
  {
    id: "faq8",
    question: "How will the help be given?",
    answer:
      "For rent arrears and council tax arrears, your Zakat grant will be paid directly to your council or Housing Association. For the Moving-in Zakat Grant, funds will be transferred to your account for purchasing items such as furniture, carpet, or flooring.",
  },
  {
    id: "faq9",
    question: "What if I am not happy with your service?",
    answer:
      "We are committed to providing high-quality service to all applicants. If you are dissatisfied, please contact us via our complaint page.<br>What will happen next?<br>- We will acknowledge receipt of your complaint within 5 working days.<br>- We will investigate, review evidence, and consult staff if necessary.<br>- We aim to respond to your complaint within 10 working days. If this is not possible, we will provide an update.",
  },
];

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
          <h3 className="text-s2 text-secondary font-semibold">Process:</h3>
          <ul className="font-normal text-s3 sm:text-paragraph text-secondary/80 list-disc pl-4">
            <li>Click the button below to express interest in Zakat.</li>
            <li>
              You’ll receive an email within <strong>3-6</strong> weeks to
              confirm eligibility.
            </li>
          </ul>
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

export default Housing;
