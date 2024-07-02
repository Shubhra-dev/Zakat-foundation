import ContactInput from "./ContactInput";
function ContactForm() {
  return (
    <div className="w-full sm:w-3/5 relative">
      <h2 className="text-center py-4 text-h3 sm:text-title font-pally font-bold text-secondary">
        Want to get in touch?
      </h2>
      <div className="px-6">
        <div className="flex gap-6">
          <ContactInput
            id={"firstName"}
            placeholder={"First Name"}
            w={"w-1/2"}
          />
          <ContactInput
            id={"lastName"}
            placeholder={"Last/Sur Name"}
            w={"w-1/2"}
          />
        </div>
        <div className="py-4">
          <ContactInput id={"email"} placeholder={"Email"} type={"email"} />
          <select
            name="purpose"
            id="purpose"
            className={`py-2 my-4 font-normal text-s3 sm:text-paragraph border-b border-b-gray-300 w-full text-secondary/60`}
          >
            <option value="">Nature of Enquiry</option>
            <option value="">Zakat</option>
            <option value="">Sadaqah</option>
            <option value="">Nisab</option>
          </select>
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Message/Your Question"
          rows={3}
          className={`py-2 my-4 font-normal text-s3 sm:text-paragraph border-b border-b-gray-300 w-full`}
        ></textarea>
        <div className="w-ful m-auto">
          <button className="rounded-full w-full text-primary bg-gradient-to-r from-accentRed to-accentPurple text-s3 sm:text-paragraph font-semibold py-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
