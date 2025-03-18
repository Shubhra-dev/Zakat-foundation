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
        <li>
          <span className="font-bold text-black/70">
            Eligibility for receiving Zakat:{" "}
          </span>
          Whether the applicant qualifies under the eight categories outlined in
          the Quran.
        </li>
        <li>
          <span className="font-bold text-black/70">
            Eligibility for the specific grant applied for:{" "}
          </span>
          Whether the applicant qualifies under the eight categories outlined in
          the Quran.
        </li>
      </ul>
      <p className=" font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%]">
        If all necessary information is provided, a decision is typically made
        within a few days. We then contact the applicant to communicate the
        outcome. If approved, the Zakat grant is disbursed directly into their
        bank account or provided as a non-cash grant (e.g., vouchers or payments
        to service providers) if deemed more beneficial.
      </p>
    </div>
  );
}

export default WhatHappens;
