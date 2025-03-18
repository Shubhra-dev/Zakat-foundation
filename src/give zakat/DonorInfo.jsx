import { useState } from "react";
import P from "../ui/P";
import RoundedButton from "../ui/RoundedButton";

function DonorInfo({
  userData,
  setData,
  setPage,
  responses,
  isloading,
  handleSubmit,
}) {
  const [phoneError, setPhoneError] = useState("");

  function validatePhoneNumber(phone) {
    const bangladeshPhoneRegex = /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/;
    if (!bangladeshPhoneRegex.test(phone)) {
      setPhoneError("Invalid Bangladeshi phone number");
    } else {
      setPhoneError(""); // Clear error if valid
    }
  }

  return (
    <div className="px-4">
      <h3 className="text-h4 font-semibold py-3 text-center text-secondary">
        Your Basic Informations
      </h3>

      {/* Validation Errors */}
      {responses.validationError && (
        <div className="bg-accentPurple rounded-md text-center w-11/12 m-auto mb-2">
          <P textColor={"text-primary"} p={"py-2"}>
            {responses.validationError}
          </P>
        </div>
      )}
      {responses.error && (
        <div className="bg-accentRed rounded-md text-center w-11/12 m-auto mb-2">
          <P textColor={"text-primary"} p={"py-2"}>
            {responses.error}
          </P>
        </div>
      )}

      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-4 pb-6">
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={userData.name}
          onChange={(e) => setData({ ...userData, name: e.target.value })}
          className="p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full sm:w-1/2 rounded-md"
        />
        <div className="w-full sm:w-1/2">
          <input
            id="phone"
            type="text"
            placeholder="Your Phone (e.g., +8801XXXXXXXXX or 01XXXXXXXXX)"
            value={userData.phone}
            onChange={(e) => {
              const newPhone = e.target.value;
              setData({ ...userData, phone: newPhone });
              validatePhoneNumber(newPhone);
            }}
            className="p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full rounded-md"
          />
          {phoneError && <p className="text-red-500 text-sm">{phoneError}</p>}
        </div>
      </div>

      <input
        id="email"
        type="email"
        placeholder="Your Email"
        value={userData.email}
        onChange={(e) => setData({ ...userData, email: e.target.value })}
        className="p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full rounded-md"
      />
      <input
        id="address"
        type="text"
        placeholder="Your Address"
        value={userData.address}
        onChange={(e) => setData({ ...userData, address: e.target.value })}
        className="mt-6 p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full rounded-md"
      />

      {/* Buttons */}
      <div className="w-max flex gap-4 m-auto py-8">
        <RoundedButton
          bg={"bg-accentRed"}
          padding={"px-10 py-2"}
          onClick={() => setPage(1)}
        >
          Update Amount
        </RoundedButton>
        <RoundedButton
          bg={"bg-accentCyan"}
          padding={"px-10 py-2"}
          onClick={() => {
            if (!phoneError) handleSubmit();
          }}
        >
          {isloading ? "Submitting..." : "Submit"}
        </RoundedButton>
      </div>
    </div>
  );
}

export default DonorInfo;
