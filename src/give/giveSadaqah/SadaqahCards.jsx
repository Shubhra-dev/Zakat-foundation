import { FaRegEdit } from "react-icons/fa";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function SadaqahCards() {
  return (
    <div className="py-[3%] px-[4%]">
      <h2 className="text-h3 sm:text-s1 laptop:text-title text-secondary font-bold font-pally text-center pb-4">
        600% return on your charitable investment
      </h2>
      <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/60 font-light text-center pb-4 sm:pb-[2%]">
        Every ৳ 1 you donate to our Growth Fund enables us to raise
        approximately ৳ 6 in Zakat.
      </p>
      <EqualHeightFlexContainer addedClass="w-full flex-col sm:flex-row relative justify-between gap-8 items-start">
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-4 sm:p-[3%] w-full sm:w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentRed/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentRed" />
          <h3 className="text-h4 sm:text-h3 laptop:text-h2 text-secondary font-pally font-bold py-[2%]">
            Increase your rewards
          </h3>
          <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 font-light">
            Supporting the AL-ZAKATI Growth Fund is a unique chance to amplify
            your influence and increase your rewards. By investing in
            initiatives that raise awareness of our mission and the importance
            of distributing Zakat in the UK, we empower more Muslims to
            contribute. The greater our visibility, the more Zakat we can raise
            to aid those in need
          </p>
        </div>
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-4 sm:p-[3%] w-full sm:w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentCyan/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentCyan" />
          <h3 className="text-h4 sm:text-h3 laptop:text-h2 text-secondary font-pally font-bold py-[2%]">
            Earn Sadaqah Jariyah
          </h3>
          <p className="text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 font-light">
            Support the Development and Upgrade of Our SystemsDigital is a core
            part of our AL-ZAKATI tomorrow Transformation plan, enabling us to
            collect more Zakat year on year. It is how we can support more Zakat
            givers and recipients in a better manner creating the rewards of
            doing so for yourself ensuring it comes back to you..
          </p>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default SadaqahCards;
