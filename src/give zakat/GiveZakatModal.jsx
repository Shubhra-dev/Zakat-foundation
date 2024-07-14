import H2 from "../ui/H2";
import RoundedButton from "../ui/RoundedButton";
import NumberBlock from "./NumberBlock";
import P from "../ui/P";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonorInfo from "./DonorInfo";
import ThanksGiving from "./ThanksGiving";
const initialState = {
  name: "",
  phone: "",
  donation: "",
  email: "",
  address: "",
};
function GiveZakatModal() {
  const [formData, setFormData] = useState(initialState);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [validationError, setValidationError] = useState(null);
  const [error, setError] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [success, setSuccess] = useState(null);
  const handleSubmit = async () => {
    setIsloading(true);
    console.log(formData);
    try {
      const response = await fetch(
        "https://admin.alzakati.com/api/v1/contact-store",
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
          console.log(errorData);
          setValidationError(errorData.message);
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        const data = await response.json();
        setError(null);
        setValidationError(null);
        setSuccess(data);
        setFormData(initialState);
        setPage(3);
      }
    } catch (error) {
      console.log(error);
      setValidationError(null);
      setError(error.message);
    } finally {
      setIsloading(false); // Set loading to false when submission ends
    }
  };
  function handleAmount() {
    setValidationError(null);
    setError(null);
    setPage(2);
  }
  return (
    <div className="w-full sm:w-5/6 laptop:w-4/6 h-full m-auto rounded-sm">
      <div className="w-5/6 rounded-md m-auto border border-gray-200 bg-slate-100 my-8">
        {page !== 3 && (
          <div className="pt-8 pb-4">
            <H2 textColor={"text-secondary"} add={"text-center"}>
              Zakat
            </H2>
            {/* <FaQuestionCircle
            className="text-s2 cursor-pointer"
            onClick={() => setQuesZakat(true)}
          /> */}
          </div>
        )}
        {page === 1 && (
          <>
            <h3
              className={
                "text-center font-semibold text-paragraph laptop:text-s2 py-2"
              }
            >
              Choose Your Amount:
            </h3>
            <div className="flex py-6 items-center justify-center w-5/6 gap-2 m-auto">
              <NumberBlock
                num={"1000"}
                onclick={() => setFormData({ ...formData, donation: "1000" })}
              />
              <NumberBlock
                num={"2000"}
                onclick={() => setFormData({ ...formData, donation: "2000" })}
              />
              <NumberBlock
                num={"3000"}
                onclick={() => setFormData({ ...formData, donation: "3000" })}
              />
              <NumberBlock
                num={"4000"}
                onclick={() => setFormData({ ...formData, donation: "4000" })}
              />
            </div>
            <P padding={"py-8"} add={"text-center font-semibold"}>
              Or
            </P>
            <div className={`w-1/2 sm:w-3/4"} m-auto pb-2`}>
              <div className="flex items-center bg-white w-full rounded-xl border border-gray-300">
                <P
                  add={
                    "w-[20%] h-full rounded-l-xl bg-gray-100 border-r border-r-gray-300 text-center"
                  }
                  p={"py-2"}
                >
                  ৳
                </P>
                <input
                  type="text"
                  name="zakatInput"
                  id="zakatInput"
                  value={formData.donation}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      donation: String(e.target.value),
                    })
                  }
                  placeholder="Enter Amount"
                  className="w-[80%] h-full p-2 rounded-r-xl text-s3 sm:text-paragraph"
                />
              </div>
            </div>
            <div className="w-max m-auto py-2">
              <RoundedButton
                bg={"bg-accentCyan"}
                padding={"px-10 py-2"}
                onClick={handleAmount}
              >
                Submit
              </RoundedButton>
            </div>
            <div className="w-max m-auto py-2">
              <P padding={"py-4"} add={"text-center font-medium"}>
                Not sure about the amount?{" "}
                <span
                  onClick={() => navigate("/zakat_calculator")}
                  className="text-accentPurple font-bold cursor-pointer animate-pulse"
                >
                  Calculate
                </span>
              </P>
            </div>
          </>
        )}
        {page === 2 && (
          <DonorInfo
            userData={formData}
            setData={setFormData}
            setPage={setPage}
            responses={{ validationError, error }}
            isloading={isloading}
            handleSubmit={handleSubmit}
          />
        )}
        {page === 3 && <ThanksGiving response={success} />}
      </div>
    </div>
  );
}

export default GiveZakatModal;
