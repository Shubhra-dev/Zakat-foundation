import { FaHouse, FaMoneyBillTrendUp } from "react-icons/fa6";
import ApplyLayout from "../ApplyLayout";
import ApplyHero from "./ApplyHero";

import { IoSchoolSharp } from "react-icons/io5";

function ApplyForHelp() {
  return (
    <ApplyLayout tab={1}>
      <ApplyHero />
      <div className="text-center py-[3%] bg-primary px-[3%]">
        <h4 className="text-secondary text-xl font-normal uppercase text-center pb-4">
          Apply for zakat
        </h4>
        <h2 className="w-4/5 m-auto text-secondary font-semibold text-title font-pally pb-4">
          You can get help in these three areas
        </h2>
        <p className="w-4/5 m-auto font-normal text-paragraph text-secondary/80 pb-[3%]">
          To apply for help from Zakat Foundation Bangladesh you must have your
          own email address, mobile phone number and a device able to connect to
          the internet.
        </p>
      </div>
      <div className="px-6 pb-6 flex justify-between gap-6">
        <div className="h-[450px] w-1/3 rounded-xl ">
          <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
            <div className="bg-primary w-full h-[50%] absolute -bottom-7 right-3 rotate-[3deg]"></div>
            <FaMoneyBillTrendUp className="text-4xl text-primary" />
          </div>
          <div className="h-[70%] py-2 px-4">
            <h3 className="text-h3 font-pally text-secondary font-medium">
              Hardship Relief
            </h3>
            <p className="text-light font-normal text-secondary/60 pt-2">
              This fund gives grants for basic costs and help with small debts
              to vulnerable Muslims in the UK who are unable to pay for basic
              living costs.
            </p>
          </div>
          <div className="h-[15%] bg-blue-100"></div>
        </div>
        <div className="h-[450px] w-1/3 rounded-xl ">
          <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl px-4 py-3">
            <FaHouse className="text-4xl text-primary" />
          </div>
          <div className="h-[70%]"></div>
          <div className="h-[15%] bg-blue-100"></div>
        </div>
        <div className="h-[450px] w-1/3 rounded-xl ">
          <div className="h-[15%] bg-accentRed overflow-hidden rounded-t-xl relative px-4 py-3">
            <div className="bg-primary w-full h-[50%] absolute -bottom-7 left-3 -rotate-[3deg]"></div>
            <IoSchoolSharp className="text-4xl text-primary" />
          </div>
          <div className="h-[70%]"></div>
          <div className="h-[15%] bg-blue-100"></div>
        </div>
      </div>
    </ApplyLayout>
  );
}

export default ApplyForHelp;
