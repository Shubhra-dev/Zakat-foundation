function WhatHappens() {
  return (
    <div className="pb-[2%] bg-primary px-[3%]">
      <h2 className="text-center w-5/6 laptop:w-4/5 m-auto text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        What happens next
      </h2>
      <p className="font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 ">
        After an individual applies to one of our funds using our online form,
        our team carefully reviews all the information provided to determine:
      </p>
      <ul className="px-4 sm:px-8 laptop:px-[2%] list-disc font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 py-4">
        <li>Eligibility for receiving Zakat</li>
        <li>Eligibility for the specific grant applied for</li>
      </ul>
      <p className=" font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%]">
        If all necessary information is provided, a decision will typically be
        made within a few days. We will then contact the applicant to
        communicate the decision. If approved, the Zakat grant will be disbursed
        directly into their bank account. Alternatively, if a non-cash grant
        such as a voucher or payment to a delivery partner is deemed more
        beneficial, we will arrange for that.
      </p>
    </div>
  );
}

export default WhatHappens;
