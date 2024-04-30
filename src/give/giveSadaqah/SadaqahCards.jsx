import { FaRegEdit } from "react-icons/fa";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function SadaqahCards() {
  return (
    <div className="py-[3%] px-[4%]">
      <h2 className="text-[50px] text-secondary font-bold font-pally text-center pb-4">
        600% return on your charitable investment
      </h2>
      <p className="text-2xl text-secondary/60 font-light text-center pb-[2%]">
        Every ৳ 1 you donate to our Growth Fund enables us to raise
        approximately ৳ 6 in Zakat.
      </p>
      <EqualHeightFlexContainer addedClass="w-full relative justify-between gap-8 items-start">
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-[3%] w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentRed/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentRed" />
          <h3 className="text-[40px] text-secondary font-pally font-bold py-[2%]">
            Multiply Your Rewards
          </h3>
          <p className="text-xl text-secondary/80 font-light">
            Supporting the NZF Growth Fund is an unmissable opportunity to
            maximise your impact and multiply your rewards. We achieve this by
            investing in activities which help to raise awareness of our work
            and the need for Zakat to be distributed in the UK. The more Muslims
            know about our service, the more we can raise in Zakat and help
            those in need.
          </p>
        </div>
        <div className="bg-gradient-to-b from-primary to-zinc-100 p-[3%] w-1/2 rounded-xl -z-20 relative overflow-hidden">
          <div className="h-[250px] w-[250px] absolute -z-10 -right-8 -top-16 bg-gradient-to-b from-primary to-accentCyan/20 rounded-full"></div>
          <FaRegEdit className="text-2xl text-accentCyan" />
          <h3 className="text-[40px] text-secondary font-pally font-bold py-[2%]">
            Earn Sadaqah Jariyah
          </h3>
          <p className="text-xl text-secondary/80 font-light">
            By supporting NZF’s Growth Fund, you can earn Sadaqah Jariyah
            (ongoing charity) through the technology projects we invest
            in.Developing and upgrading our technology infrastructure enables us
            to collect and distribute more Zakat on an ongoing basis.This
            enables us to serve the needs of more Zakat givers and recipients in
            a better and more efficient way, allowing the rewards of doing so to
            flow back to you.
          </p>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default SadaqahCards;
