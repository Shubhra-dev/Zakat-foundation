import RoundedButton from "../../ui/RoundedButton";
import ques from "../../assets/touch.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";

function GuideContact() {
  return (
    <EqualHeightFlexContainer addedClass="p-[4%] items-start flex-col sm:flex-row">
      <div className="w-full sm:w-3/4">
        <div className="hidden w-full h-[120px] sm:flex justify-end items-start">
          <div className="w-[120px] h-full rounded-xl bg-primary border-[12px] border-primary -mt-[3%] -mr-[6%] z-10">
            <div className="w-full h-full rounded-xl bg-accentRed"></div>
          </div>
        </div>
        <div className="py-[5%]">
          <h2 className="text-secondary font-semibold text-h3 sm:text-title text-center sm:text-left font-pally sm:w-3/4">
            Do you still have Questions?
          </h2>
          <p className="text-neutral-800/80 text-light sm:text-s2 text-center sm:text-left font-normal sm:w-3/4 py-6">
            If you have any other questions about calculating your Zakat or need
            extra support, get in touch to find out how else
            <strong> Zakat Foundation Bangladesh</strong> can help.
          </p>
          <div className="w-max m-auto sm:m-0">
            <RoundedButton bg={"bg-accentRed"}>Get in Touch</RoundedButton>
          </div>
        </div>
      </div>
      <div
        className="hidden sm:block w-1/4 rounded-xl bg-cover bg-top"
        style={{ backgroundImage: `url(${ques})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default GuideContact;
