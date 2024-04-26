import { LuBookMinus } from "react-icons/lu";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function DowloadGuides() {
  return (
    <div className="py-[5%] bg-slate-100">
      <h2 className="text-secondary font-bold text-6xl font-pally text-center pb-[3%]">
        Download your FREE Zakat Guide
      </h2>
      <EqualHeightFlexContainer addedClass={"px-[2%] gap-8"}>
        <div className="w-1/3 rounded-xl bg-gradient-to-tl from-accentCyan/50 to-primary to-45%">
          <div className="w-full p-[10%] rounded-xl backdrop-blur-3xl h-full">
            <LuBookMinus className={`text-3xl text-accentCyan`} />
            <h3 className="text-secondary text-3xl font-medium font-pally pt-[5%] pb-[3%]">
              General Zakat <br />
              Guide
            </h3>
            <h5 className="font-normal text-secondary/60 text-lg pb-[5%]">
              PDF
            </h5>
            <h6 className="font-bold text-lg text-accentCyan cursor-pointer">
              Download
            </h6>
          </div>
        </div>
        <div className="w-1/3 rounded-xl bg-gradient-to-tl from-accentRed/50 to-primary to-45%">
          <div className="w-full p-[10%] rounded-xl backdrop-blur-3xl h-full">
            <LuBookMinus className="text-3xl text-accentRed" />
            <h3 className="text-secondary text-3xl font-medium font-pally pt-[5%] pb-[3%]">
              Business Zakat <br />
              Guide
            </h3>
            <h5 className="font-normal text-secondary/60 text-lg pb-[5%]">
              PDF
            </h5>
            <h6 className="font-bold text-lg text-accentRed cursor-pointer">
              Download
            </h6>
          </div>
        </div>
        <div className="w-1/3 rounded-xl bg-gradient-to-tl from-accentPurple/50 to-primary to-45%">
          <div className="w-full p-[10%] rounded-xl backdrop-blur-3xl h-full">
            <LuBookMinus className="text-3xl text-accentPurple" />
            <h3 className="text-secondary text-3xl font-medium font-pally pt-[5%] pb-[3%]">
              General Zakat <br />
              Guide
            </h3>
            <h5 className="font-normal text-secondary/60 text-lg pb-[5%]">
              PDF
            </h5>
            <h6 className="font-bold text-lg text-accentPurple cursor-pointer">
              Download
            </h6>
          </div>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default DowloadGuides;
