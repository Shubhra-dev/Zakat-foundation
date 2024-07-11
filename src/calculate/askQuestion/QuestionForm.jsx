import { useState } from "react";
import RoundedButton from "../../ui/RoundedButton";
import P from "../../ui/P";
const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  nature_of_enquiry: "",
  message: "",
};
function QuestionForm() {
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
    <div className="text-center bg-slate-100 py-[3%]">
      <h2 className="text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title py-[3%] font-pally leading-tight">
        Send us your question
      </h2>
      <div className="w-5/6 m-auto">
        {validationError && (
          <div className="bg-accentRed rounded-md w-full px-4 mb-2">
            <P textColor={"text-primary"} p={"py-2"}>
              {validationError}
            </P>
          </div>
        )}
        {error && (
          <div className="bg-accentRed rounded-md w-full px-4 mb-2">
            <P textColor={"text-primary"} p={"py-2"}>
              {error}
            </P>
          </div>
        )}
        {success && (
          <div className="bg-green-700 rounded-md w-full px-4 mb-2">
            <P textColor={"text-primary"} p={"py-2"}>
              {success}
            </P>
          </div>
        )}
        <div className="sm:flex w-full justify-between pb-[3%]">
          <input
            type="text"
            value={formData.first_name}
            onChange={(e) =>
              setFormData({ ...formData, first_name: e.target.value })
            }
            placeholder="First Name"
            className="w-full sm:w-[45%] py-3 px-2 text-secondary/60 text-light sm:text-s2 border border-b-gray-400 rounded-sm"
          />
          <input
            type="text"
            value={formData.last_name}
            onChange={(e) =>
              setFormData({ ...formData, last_name: e.target.value })
            }
            placeholder="Sur/Last Name"
            className="w-full sm:w-[45%] mt-[3%] sm:mt-0  py-3 px-2 text-secondary/60 text-light sm:text-s2 border border-b-gray-400 rounded-sm"
          />
        </div>
        <div className="w-full pb-[3%]">
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="Email Address"
            className="w-full py-3 px-2 text-secondary/60 text-light sm:text-s2 border border-b-gray-400 rounded-sm"
          />
        </div>
        <div className="w-full pb-[3%]">
          <select
            value={formData.nature_of_enquiry}
            onChange={(e) =>
              setFormData({ ...formData, nature_of_enquiry: e.target.value })
            }
            className="w-full py-3 px-2 text-secondary/60 text-light sm:text-s2 border border-b-gray-400 rounded-sm"
          >
            <option value="">Type of Enquiry</option>
            <option value="zakat">Zakat</option>
            <option value="nisab">Nisab</option>
            <option value="sadaqah">Sadaqah</option>
          </select>
        </div>
        <div className="w-full pb-[3%]">
          <textarea
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Message/Question"
            className="w-full py-3 px-2 text-secondary/60 text-light sm:text-s2 border border-b-gray-400 rounded-sm"
          />
        </div>
        <RoundedButton
          bg={"bg-gradient-to-r from-accentRed to-accentPurple"}
          padding={"px-6 sm:px-10 py-3"}
          onClick={handleSubmit}
        >
          {isloading ? "Submitting..." : "Submit"}
        </RoundedButton>
      </div>
    </div>
  );
}

export default QuestionForm;
