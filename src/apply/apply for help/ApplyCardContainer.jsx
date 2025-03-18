import { FaHouse, FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import ApplyCard from "./ApplyCard";

function ApplyCardContainer() {
  return (
    <div className="px-6 pb-6 flex flex-col tab:flex-row justify-between gap-4 sm:gap-6 overflow-x-scroll scrollbar-hide">
      <ApplyCard link={"hardship_relief"}>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
          <div className="bg-primary w-[110%] h-[50%] tab:absolute -bottom-7 right-0 rotate-[3deg]"></div>
          <FaMoneyBillTrendUp className="text-3xl sm:text-4xl text-primary" />
        </div>
        <div className="h-[70%] py-2 px-4">
          <h3 className="text-s2 sm:text-h4 laptop:text-h3 font-pally text-secondary font-medium">
            Hardship Relief
          </h3>
          <p className="text-s3 sm:text-light font-normal text-secondary/60 py-2">
            This fund offers grants to help vulnerable Muslims in Bangladesh who
            are unable to afford basic living expenses. It provides financial
            support for essential needs and assists with small debts.
          </p>
          <ul className="text-s3 sm:text-light font-normal text-secondary/60 list-decimal pl-4">
            <li>Funded by charities, government, and community donations.</li>
            <li>
              Proof of financial distress is usually required for eligibility.
            </li>
            <li>
              Hardship relief funds offer financial help for unexpected crises.
            </li>
            <li>
              Covers essential expenses like medical bills and utility bills.
            </li>
          </ul>
        </div>
      </ApplyCard>
      <ApplyCard link={"housing_fund"}>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl px-4 py-3">
          <FaHouse className="text-3xl sm:text-4xl text-primary" />
        </div>
        <div className="h-[70%] px-4 py-2">
          <h3 className="text-s2 sm:text-h4 laptop:text-h3 font-pally text-secondary font-medium">
            Housing Funds
          </h3>
          <p className="text-s3 sm:text-light font-normal text-secondary/60 py-2">
            This fund provides grants to assist Muslims in Bangladesh who
            require support to afford safe, livable accommodation.
            <span className="block">You can apply for help with:</span>
          </p>
          <ul className="text-s3 sm:text-light font-normal text-secondary/60 list-decimal pl-4">
            <li>
              Rent and Deposit: For moving into affordable and secure housing
            </li>
            <li>
              Arrears: Including rent arrears (owing on your current residence)
              and Council Tax arrears
            </li>
            <li>
              Moving In: To help cover the costs associated with settling into
              your new home
            </li>
          </ul>
        </div>
      </ApplyCard>
      <ApplyCard link={"work_and_education"}>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
          <div className="bg-primary w-[110%] h-[50%] tab:absolute -bottom-7 left-0 -rotate-[3deg]"></div>
          <IoSchoolSharp className="text-3xl sm:text-4xl text-primary" />
        </div>
        <div className="h-[70%] py-2 px-4">
          <h3 className="text-s2 sm:text-h4 laptop:text-h3 font-pally text-secondary font-medium">
            Work & Education Fund
          </h3>
          <p className="text-s3 sm:text-light font-normal text-secondary/60 py-2">
            This fund provides grants to assist Muslims in the UK who are
            unemployed or have low incomes to secure employment and enhance
            their earnings.
            <span className="block"> You can apply for help with:</span>
          </p>
          <ul className="text-s3 sm:text-light font-normal text-secondary/60 list-decimal pl-4">
            <li>Training course fees</li>
            <li>Certification and License fees</li>
            <li>Qualification conversion fees</li>
            <li>Vocational training courses - up to one year</li>
          </ul>
        </div>
      </ApplyCard>
    </div>
  );
}

export default ApplyCardContainer;
