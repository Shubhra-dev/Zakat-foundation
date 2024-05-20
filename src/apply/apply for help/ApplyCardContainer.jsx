import { FaHouse, FaMoneyBillTrendUp } from "react-icons/fa6";
import { IoSchoolSharp } from "react-icons/io5";
import ApplyCard from "./ApplyCard";

function ApplyCardContainer() {
  return (
    <div className="px-6 pb-6 flex justify-between gap-6">
      <ApplyCard>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
          <div className="bg-primary w-[110%] h-[50%] absolute -bottom-7 right-0 rotate-[3deg]"></div>
          <FaMoneyBillTrendUp className="text-4xl text-primary" />
        </div>
        <div className="h-[70%] py-2 px-4">
          <h3 className="text-h3 font-pally text-secondary font-medium">
            Hardship Relief
          </h3>
          <p className="text-light font-normal text-secondary/60 pt-2">
            This fund gives grants for basic costs and help with small debts to
            vulnerable Muslims in the UK who are unable to pay for basic living
            costs.
          </p>
        </div>
      </ApplyCard>
      <ApplyCard>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl px-4 py-3">
          <FaHouse className="text-4xl text-primary" />
        </div>
        <div className="h-[70%] px-4 py-2">
          <h3 className="text-h3 font-pally text-secondary font-medium">
            Housing
          </h3>
          <p className="text-light font-normal text-secondary/60 py-2">
            This fund offers grants to help Muslims in the UK who need support
            to live in affordable, liveable and safe accommodation.
            <span className="block">You can apply for help with:</span>
          </p>
          <ul className="text-light font-normal text-secondary/60 list-decimal pl-4">
            <li>
              Rent and Deposit - To move into an affordable and secure home
            </li>
            <li>
              Arrears
              <ul className="list-disc pl-4">
                <li>Rent arrears - Rent owed on your current home</li>
                <li>Council Tax arrears - Council Tax debts</li>
              </ul>
            </li>
            <li>
              Moving In - To help with the costs of settling into your new home
            </li>
          </ul>
        </div>
      </ApplyCard>
      <ApplyCard>
        <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
          <div className="bg-primary w-[110%] h-[50%] absolute -bottom-7 left-0 -rotate-[3deg]"></div>
          <IoSchoolSharp className="text-4xl text-primary" />
        </div>
        <div className="h-[70%] py-2 px-4">
          <h3 className="text-h3 font-pally text-secondary font-medium">
            Work & Education
          </h3>
          <p className="text-light font-normal text-secondary/60 py-2">
            This fund offers grants to help Muslims in the UK who are unemployed
            or on low incomes to get a job and increase their incomes.
            <span className="block"> You can apply for help with:</span>
          </p>
          <ul className="text-light font-normal text-secondary/60 list-decimal pl-4">
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
