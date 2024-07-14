import hand from "../assets/hand.png";
import { FaQuoteLeft } from "react-icons/fa";
import EqualHeightFlexContainer from "./EqualHeightFlexContainer";
function Tomorrow() {
  return (
    <div className="bg-accentCyan/10">
      <EqualHeightFlexContainer addedClass="items-start flex-col sm:flex-row w-11/12 sm:w-5/6 mx-auto mb-[8%]">
        <div
          className="hidden sm:block w-2/5 rounded-md -mb-[8%] mt-[8%] bg-cover bg-center mr-[10%]"
          style={{ backgroundImage: `url(${hand})` }}
        >
          {/* <img src={hand} alt="hand" className="h-full w-[70%] object-cover" /> */}
        </div>
        <div className="w-full tab:w-3/5 pt-[8%]">
          <h2 className="text-light sm:text-s2 tab:text-h4 text-accentCyan font font-semibold">
            About Al Zakati
          </h2>
          <h1 className="text-secondary text-h3 sm:text-s1 tab:text-title font-bold font-pally w-full tab:w-3/4 laptop:leading-[70px] py-4">
            You Have The Power To Change Tomorrow
          </h1>
          <p className="text-secondary text-s3 sm:text-light tab:text-s2 font-normal w-full tab:w-3/4 pb-[6%]">
            At AL-Zakati, we are dedicated to ensuring that your Zakat reaches
            those who need it most. Our team works tirelessly to distribute
            funds in accordance with Islamic principles, making sure every
            donation has a positive impact.
          </p>
          <div className="relative bg-accentRed py-4 rounded-md w-full laptop:w-3/4 sm:-ml-[25%] sm:-mb-[10%]">
            <FaQuoteLeft className="text-[70px] tab:text-[120px] text-primary/15 absolute left-[10%]" />
            <div className="flex items-center">
              <div className="hidden sm:block w-1/5"></div>
              <div className="w-full tab:w-4/5 text-center sm:text-left">
                <h3 className="pb-2 text-primary text-s2 sm:text-h4 tab:text-h3 font-semibold">
                  “One who pays Zakat,
                  <br /> Allah will make their wealth increase”
                </h3>
                <h5 className="text-primary text-s3 sm:text-light tab:text-s2 font-semibold">
                  -Shahih Bukhari
                </h5>
              </div>
            </div>
          </div>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default Tomorrow;
