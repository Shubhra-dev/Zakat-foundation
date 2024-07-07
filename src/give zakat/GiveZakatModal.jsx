import H2 from "../ui/H2";
import ZakatInput from "../zakat calculator/ZakatInput";
import RoundedButton from "../ui/RoundedButton";
import NumberBlock from "./NumberBlock";
import P from "../ui/P";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DonorInfo from "./DonorInfo";
const initialState = {
  amount: 0,
  name: null,
  phone: null,
  address: null,
  email: null,
};
function GiveZakatModal() {
  const [userData, setUserData] = useState(initialState);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-5/6 laptop:w-4/6 h-full m-auto rounded-sm">
      <div className="w-5/6 rounded-md m-auto border border-gray-200 bg-slate-100 my-8">
        <div className="pt-8 pb-4">
          <H2 textColor={"text-secondary"} add={"text-center"}>
            Zakat
          </H2>
          {/* <FaQuestionCircle
            className="text-s2 cursor-pointer"
            onClick={() => setQuesZakat(true)}
          /> */}
        </div>
        {page === 1 && (
          <>
            <h3
              className={
                "text-center font-semibold text-paragraph laptop:text-s2 py-2"
              }
            >
              Choose Your Amount:
            </h3>
            <div className="flex py-6 items-center justify-center w-5/6 gap-2 m-auto">
              <NumberBlock
                num={"1000"}
                onclick={() => setUserData({ ...userData, amount: 1000 })}
              />
              <NumberBlock
                num={"2000"}
                onclick={() => setUserData({ ...userData, amount: 2000 })}
              />
              <NumberBlock
                num={"3000"}
                onclick={() => setUserData({ ...userData, amount: 3000 })}
              />
              <NumberBlock
                num={"4000"}
                onclick={() => setUserData({ ...userData, amount: 4000 })}
              />
            </div>
            <P padding={"py-8"} add={"text-center font-semibold"}>
              Or
            </P>
            <ZakatInput
              name={"zakatAmount"}
              wd={"w-1/2"}
              value={userData.amount}
              setData={setUserData}
            />
            <div className="w-max m-auto py-2">
              <RoundedButton
                bg={"bg-accentCyan"}
                padding={"px-10 py-2"}
                onClick={() => setPage(2)}
              >
                Submit
              </RoundedButton>
            </div>
            <div className="w-max m-auto py-2">
              <P padding={"py-4"} add={"text-center font-medium"}>
                Not sure about the amount?{" "}
                <span
                  onClick={() => navigate("/zakat_calculator")}
                  className="text-accentPurple font-bold cursor-pointer animate-pulse"
                >
                  Calculate
                </span>
              </P>
            </div>
          </>
        )}
        {page === 2 && (
          <DonorInfo
            userData={userData}
            setData={setUserData}
            setPage={setPage}
          />
        )}
      </div>
    </div>
  );
}

export default GiveZakatModal;
