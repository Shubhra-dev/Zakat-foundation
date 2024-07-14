import { useState } from "react";
import ContactInput from "./ContactInput";
import P from "../ui/P";
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  nature_of_enquiry: "",
  message: "",
};
function ContactForm() {
  const [validationError, setValidationError] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = async () => {
    setIsloading(true);
    try {
      const response = await fetch(
        "https://admin.alzakati.com/api/v1/contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        if (response.status === 422) {
          const errorData = await response.json();
          setError(null);
          setValidationError(errorData.message);
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        const data = await response.json();
        setError(null);
        setValidationError(null);
        setSuccess(data.message);
        setFormData(initialState);
      }
    } catch (error) {
      setValidationError(null);
      setError(error.message);
    } finally {
      setIsloading(false); // Set loading to false when submission ends
    }
  };
  return (
    <div className="w-full sm:w-3/5 relative">
      <h2 className="text-center py-4 text-h3 laptop:text-title font-pally font-bold text-secondary">
        Want to get in touch?
      </h2>
      {validationError && (
        <div className="bg-accentRed rounded-md text-center w-11/12 m-auto mb-2">
          <P textColor={"text-primary"} p={"py-2"}>
            {validationError}
          </P>
        </div>
      )}
      {error && (
        <div className="bg-accentRed rounded-md text-center w-11/12 m-auto mb-2">
          <P textColor={"text-primary"} p={"py-2"}>
            {error}
          </P>
        </div>
      )}
      {success && (
        <div className="bg-green-700 rounded-md text-center w-11/12 m-auto mb-2">
          <P textColor={"text-primary"} p={"py-2"}>
            {success}
          </P>
        </div>
      )}
      <div className="px-6">
        <div className="flex gap-6">
          <ContactInput
            id={"firstName"}
            placeholder={"First Name"}
            w={"w-1/2"}
            value={formData.first_name}
            setData={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
          />
          <ContactInput
            id={"lastName"}
            placeholder={"Last/Sur Name"}
            w={"w-1/2"}
            value={formData.last_name}
            setData={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
          />
        </div>
        <div className="py-4">
          <ContactInput
            id={"email"}
            placeholder={"Email"}
            type={"email"}
            value={formData.email}
            setData={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <select
            name="purpose"
            value={formData.nature_of_enquiry}
            onChange={(e) =>
              setFormData({ ...formData, nature_of_enquiry: e.target.value })
            }
            id="purpose"
            className={`py-2 my-4 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full text-secondary/60`}
          >
            <option value="">Nature of Enquiry</option>
            <option value="zakat">Zakat</option>
            <option value="sadaqah">Sadaqah</option>
            <option value="nisab">Nisab</option>
          </select>
        </div>
        <textarea
          name="message"
          id="message"
          placeholder="Message/Your Question"
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          className={`py-2 my-4 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full`}
        ></textarea>
        <div className="w-ful m-auto">
          <button
            onClick={handleSubmit}
            className="rounded-full w-full text-primary bg-gradient-to-r from-accentRed to-accentPurple text-s3 sm:text-paragraph font-semibold py-2"
          >
            {isloading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
