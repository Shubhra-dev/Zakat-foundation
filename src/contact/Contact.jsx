import ContactHero from "./ContactHero";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";

function Contact() {
  return (
    <>
      <ContactHero />
      <div className="w-11/12 sm:w-5/6 laptop:w-4/6 m-auto bg-primary rounded-xl p-4 -mt-12 sm:-mt-16 shadow-xl mb-[4%]">
        <div className="flex flex-col sm:flex-row">
          <ContactCard />
          <ContactForm />
        </div>
      </div>
    </>
  );
}

export default Contact;
