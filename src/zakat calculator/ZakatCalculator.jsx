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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  updateActive,
  updateOweActive,
} from "../features/calculate/calculateSlice";

function ZakatCalculator() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemOwn = useSelector((state) => state.calculate.own);
  const itemOwe = useSelector((state) => state.calculate.owe);

  const handleChangeOwn = (key) => {
    dispatch(updateActive(key));
  };
  const handleChangeOwe = (key) => {
    dispatch(updateOweActive(key));
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
          <div className="mb-4 tab:mb-0 border tab:w-1/2 laptop:w-auto border-green-800 p-3 bg-primary rounded-xl">
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
                  item={itemOwn}
                  handleChange={() => handleChangeOwn(item.name)}
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
                  item={itemOwe}
                  handleChange={() => handleChangeOwe(item.name)}
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
          <span
            onClick={() => navigate("/zakat/give")}
            className="text-accentPurple cursor-pointer font-semibold pl-2"
          >
            Give Zakat
          </span>
        </P>
        {itemOwn.cash.active && <Cash />}
        {itemOwn.pension.active && <Pensions />}
        {itemOwn.share.active && <Shares />}
        {itemOwn.goldAndSilver.active && <GoldSilver />}
        {itemOwn.moneOwed.active && <MoneyOwed />}
        {itemOwn.businessAsset.active && <BusinessAsset />}

        {Object.values(itemOwe).some((category) => category.active) && (
          <ItemsOwe items={itemOwe} />
        )}
        <div className="py-8 px-4 hidden laptop:block">
          <CalculationBlock />
        </div>
        {/* <div className="tab:h-[120px]"></div> */}
      </div>
      <div className="w-full laptop:w-1/4 p-6 px-4 bg-slate-100">
        <CalculationBlock />
      </div>
    </div>
  );
}

export default ZakatCalculator;
