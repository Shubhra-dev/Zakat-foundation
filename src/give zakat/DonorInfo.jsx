import RoundedButton from "../ui/RoundedButton";

function DonorInfo({ userData, setData, setPage }) {
  return (
    <div className="px-4">
      <h3 className="text-h4 font-semibold py-3 text-center text-secondary">
        Your Basic Informations
      </h3>
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
          Back
        </RoundedButton>
        <RoundedButton
          bg={"bg-accentCyan"}
          padding={"px-10 py-2"}
          onClick={() => setPage(3)}
        >
          Submit
        </RoundedButton>
      </div>
    </div>
  );
}

export default DonorInfo;
