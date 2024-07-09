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
import ItemsOwe from "./ItemsOwe";
import CalculationBlock from "./CalculationBlock";

function ZakatCalculator() {
  const [itemsOwn, setItemsOwn] = useState({
    cash: false,
    pensions: false,
    moneyOwed: false,
    goldSilver: false,
    shares: false,
    businessAssets: false,
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
    <div className="flex flex-col laptop:flex-row laptop:h-screen">
      <div className="w-full laptop:w-1/4 py-6 px-4 bg-slate-100 laptop:overflow-y-scroll scrollbar-hide">
        <P add={"text-center"}>
          Please select the options that you think may apply to you. If
          you&apos;re not sure about an option, select it anyway and more
          information will follow to help you decide.
        </P>
        <div className="tab:flex gap-2 laptop:block">
          <div className="border tab:w-1/2 laptop:w-auto border-green-800 p-3 bg-primary rounded-xl">
            <H2
              align={"text-center laptop:text-left"}
              textColor={"text-green-700"}
              font={"font-pally"}
            >
              What I Own
            </H2>
            <div className="flex flex-row flex-wrap laptop:flex-nowrap gap-2 laptop:gap-0 tab:flex-col text-light laptop:text-s2">
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
          <div className="border tab:w-1/2 laptop:w-auto border-accentRed laptop:mt-6 p-3 bg-primary rounded-xl">
            <H2
              align={"text-center laptop:text-left"}
              textColor={"text-accentRed"}
              font={"font-pally"}
            >
              What I Owe
            </H2>
            <div className=" flex flex-row flex-wrap laptop:flex-nowrap gap-2 laptop:gap-0 tab:flex-col text-light laptop:text-s2">
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
      </div>
      <div className="w-full laptop:w-2/4 p-6 px-8 overflow-y-scroll scrollbar-hide">
        <H2 textColor={"text-secondary"} font={"font-pally text-center w-full"}>
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

        {Object.values(itemsOwe).some((value) => value === true) && (
          <ItemsOwe items={itemsOwe} />
        )}
      </div>
      <CalculationBlock />
    </div>
  );
}

export default ZakatCalculator;
