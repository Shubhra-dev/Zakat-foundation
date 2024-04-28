import RoundedButton from "../../ui/RoundedButton";
import ques from "../../assets/touch.png";

function GuideContact() {
  return (
    <div className="p-[4%] flex items-start">
      <div className="w-3/4">
        <div className="w-full h-[120px] flex justify-end items-start">
          <div className="w-[120px] h-full rounded-xl bg-primary border-[12px] border-primary -mt-[3%] -mr-[6%] z-10">
            <div className="w-full h-full rounded-xl bg-accentRed"></div>
          </div>
        </div>
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
      <div className="w-1/4">
        <img src={ques} alt="thinking" className=" object-contain w-full" />
      </div>
    </div>
  );
}

export default GuideContact;
