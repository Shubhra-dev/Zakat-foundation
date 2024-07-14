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
  return (
    <div className="px-4">
      <h3 className="text-h4 font-semibold py-3 text-center text-secondary">
        Your Basic Informations
      </h3>
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
      <div className="flex flex-col sm:flex-row gap-4 pb-6">
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          value={userData.name}
          onChange={(e) => setData({ ...userData, name: e.target.value })}
          className={`p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300  w-full sm:w-1/2 rounded-md`}
        />
        <input
          id="phone"
          type="text"
          placeholder="Your Phone"
          value={userData.phone}
          onChange={(e) => setData({ ...userData, phone: e.target.value })}
          className={`p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full sm:w-1/2 rounded-md`}
        />
      </div>
      <input
        id="email"
        type="email"
        placeholder="Your Email"
        value={userData.email}
        onChange={(e) => setData({ ...userData, email: e.target.value })}
        className={`p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full rounded-md`}
      />
      <input
        id="address"
        type="text"
        placeholder="Your Address"
        value={userData.address}
        onChange={(e) => setData({ ...userData, address: e.target.value })}
        className={`mt-6 p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 w-full rounded-md`}
      />

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
          onClick={handleSubmit}
        >
          {isloading ? "Submitting..." : "Submit"}
        </RoundedButton>
      </div>
    </div>
  );
}

export default DonorInfo;
