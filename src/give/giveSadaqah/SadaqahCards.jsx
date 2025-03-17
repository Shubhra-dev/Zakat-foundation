import { FaRegEdit } from "react-icons/fa";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function SadaqahCards() {
  return (
    <div className="py-[3%] px-[4%]">
      <h2 className="text-h3 sm:text-s1 laptop:text-title text-secondary font-bold font-pally text-center pb-4">
        Increase Your Rewards
      </h2>
      <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/60 font-light text-center pb-4 sm:pb-[2%]">
        By investing in initiatives that raise awareness and expand our reach,
        you’re not just giving—you’re creating a legacy of compassion and
        generosity that will continue to benefit the Muslim community for
        generations to come. <br /> <br /> Supporting the AL-ZAKATI Growth Fund
        is a unique opportunity to:
      </p>
      <EqualHeightFlexContainer addedClass="w-full flex-col sm:flex-row relative justify-between gap-8 items-start">
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-4 sm:p-[3%] w-full sm:w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentRed/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentRed" />
          <h3 className="text-h4 sm:text-h3 laptop:text-h2 text-secondary font-pally font-bold py-[2%]">
            Multiply Your Impact
          </h3>
          <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 font-light">
            Help us raise awareness about Zakat and its importance, inspiring
            more Muslims to fulfill this sacred obligation.
          </p>
        </div>
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-4 sm:p-[3%] w-full sm:w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentCyan/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentCyan" />
          <h3 className="text-h4 sm:text-h3 laptop:text-h2 text-secondary font-pally font-bold py-[2%]">
            Earn Sadaqah Jariyah
          </h3>
          <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 font-light">
            Contribute to the development and upgrade of our digital systems,
            ensuring we can collect and distribute Zakat more effectively year
            after year. Your support creates ongoing rewards that benefit you in
            this life and the hereafter.
          </p>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default SadaqahCards;
