import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <>
      <ContactHero />
      <div className="w-5/6 laptop:w-4/6 m-auto bg-primary rounded-xl p-4 -mt-16 shadow-xl mb-[4%]">
        <EqualHeightFlexContainer>
          <ContactCard />
          <ContactForm />
        </EqualHeightFlexContainer>
      </div>
    </>
  );
}

export default Contact;
