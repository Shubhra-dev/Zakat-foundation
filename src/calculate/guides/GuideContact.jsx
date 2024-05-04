import RoundedButton from "../../ui/RoundedButton";
import ques from "../../assets/touch.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function GuideContact() {
  return (
    <EqualHeightFlexContainer addedClass="p-[4%] items-start">
      <div className="w-3/4">
        <div className="w-full h-[120px] flex justify-end items-start">
          <div className="w-[120px] h-full rounded-xl bg-primary border-[12px] border-primary -mt-[3%] -mr-[6%] z-10">
            <div className="w-full h-full rounded-xl bg-accentRed"></div>
          </div>
        </div>
        <div className="py-[5%]">
          <h2 className="text-secondary font-semibold text-6xl font-pally w-3/4">
            Do you still have Questions?
          </h2>
          <p className="text-neutral-800/80 text-xl font-normal w-3/4 py-6">
            If you have any other questions about calculating your Zakat or need
            extra support, get in touch to find out how else
            <strong> Zakat Foundation Bangladesh</strong> can help.
          </p>
          <RoundedButton bg={"bg-accentRed"}>Get in Touch</RoundedButton>
        </div>
      </div>
      <div
        className="w-1/4 rounded-xl bg-cover bg-top"
        style={{ backgroundImage: `url(${ques})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default GuideContact;
