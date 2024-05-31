import { useState } from "react";
import H2 from "../ui/H2";
import P from "../ui/P";
import { oweArray, ownArray } from "./arrays";
import Cash from "./Cash";
import MoneyOwed from "./MoneyOwed";
import GoldSilver from "./GoldSilver";
import Shares from "./Shares";
import Pensions from "./Pensions";
import ZakatCheckBox from "./ZakatCheckBox";
import BusinessAsset from "./BusinessAsset";
import Trusts from "./Trusts";
import ItemsOwe from "./ItemsOwe";
function ZakatCalculator() {
  const [itemsOwn, setItemsOwn] = useState({
    cash: false,
    pensions: false,
    moneyOwed: false,
    goldSilver: false,
    shares: false,
    businessAssets: false,
    isasAndTrusts: false,
  });
  const [itemsOwe, setItemsOwe] = useState({
    mortgage: false,
    personal_loans: false,
    credit_card: false,
    utility: false,
    overdraft: false,
    business_liability: false,
  });

  const handleChangeOwn = (event) => {
    const { name, checked } = event.target;
    setItemsOwn((prevItemsOwn) => ({
      ...prevItemsOwn,
      [name]: checked,
    }));
  };
  const handleChangeOwe = (event) => {
    const { name, checked } = event.target;
    setItemsOwe((prevItemsOwe) => ({
      ...prevItemsOwe,
      [name]: checked,
    }));
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 py-6 px-8 bg-slate-100 overflow-y-scroll scrollbar-hide">
        <P add={"text-center"}>
          Please select the options that you think may apply to you. If
          you&apos;re not sure about an option, select it anyway and more
          information will follow to help you decide.
        </P>
        <div className="border border-green-800 p-3 bg-primary rounded-xl">
          <H2 textColor={"text-green-700"} font={"font-pally leading-tight"}>
            What I Own
          </H2>
          <div className=" flex flex-col text-paragraph">
            {ownArray.map((item) => (
              <ZakatCheckBox
                name={item.name}
                label={item.label}
                key={item.name}
                items={itemsOwn}
                handleChange={handleChangeOwn}
              />
            ))}
          </div>
        </div>
        <div className="border border-accentRed mt-6 p-3 bg-primary rounded-xl">
          <H2 textColor={"text-accentRed"} font={"font-pally leading-tight"}>
            What I Owe
          </H2>
          <div className=" flex flex-col text-paragraph">
            {oweArray.map((item) => (
              <ZakatCheckBox
                name={item.name}
                label={item.label}
                key={item.name}
                items={itemsOwe}
                handleChange={handleChangeOwe}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-2/4 p-6 px-10 overflow-y-scroll scrollbar-hide">
        <H2 textColor={"text-secondary"} font={"font-pally text-center"}>
          I&apos;m ready to work out my Zakat
        </H2>
        <P add={"text-center"} p={"p-0"}>
          Use our step-by-step calculator to make sure you get it right. Or if
          you know how much to give already, just skip to
          <span className="text-accentPurple cursor-pointer font-semibold pl-2">
            Give Zakat
          </span>
        </P>
        {itemsOwn.cash && <Cash />}
        {itemsOwn.moneyOwed && <MoneyOwed />}
        {itemsOwn.goldSilver && <GoldSilver />}
        {itemsOwn.shares && <Shares />}
        {itemsOwn.pensions && <Pensions />}
        {itemsOwn.businessAssets && <BusinessAsset />}
        {itemsOwn.isasAndTrusts && <Trusts />}
        {Object.values(itemsOwe).some((value) => value === true) && (
          <ItemsOwe items={itemsOwe} />
        )}
      </div>
      <div className="w-1/4 p-6 px-8 bg-slate-100">
        <div className="rounded-xl bg-green-900 p-4 text-primary">
          <p className="font-semibold text-paragraph text-center">
            Calculation between What I own & What I owe
          </p>
        </div>
        <div className="mt-6 p-4 bg-primary rounded-xl shadow-xl">
          <p className="font-semibold text-secondary text-paragraph pb-2 border-b border-b-secondary">
            Zakat Calculation
          </p>
          <div className="flex items-center w-full pt-2 text-green-700">
            <p className="w-[75%] text-lg font-normal">What I have</p>
            <p className="w-[25%] text-lg font-normal">
              <span>৳</span>0.00
            </p>
          </div>
          <div className="flex items-center w-full text-accentRed">
            <p className="w-[75%] text-lg font-normal">(-) What I Owe</p>
            <p className="w-[25%] text-lg font-normal">
              <span>৳</span>0.00
            </p>
          </div>
          <div className="flex items-center w-full text-accentPurple">
            <p className="w-[75%] text-lg font-normal">Is equal to</p>
            <p className="w-[25%] text-lg font-normal">
              <span>৳</span>0.00
            </p>
          </div>
          <div className="flex items-center w-full text-green-800">
            <p className="w-[75%] text-lg font-normal">Today&apos;s Nisab is</p>
            <p className="w-[25%] text-lg font-normal">
              <span>৳</span>0.00
            </p>
          </div>
        </div>
        <div className="flex items-center w-full text-green-900 p-4">
          <p className="w-[75%] text-paragraph font-semibold">
            Zakat (2.5%) is:
          </p>
          <p className="w-[25%] text-paragraph font-semibold">
            <span>৳</span>0.00
          </p>
        </div>
        <div className="p-4 w-full">
          <p className="text-center text-sm text-secondary font-medium">
            Still Have Questions?
            <span className="cursor-pointer text-accentRed"> Get In Touch</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ZakatCalculator;
