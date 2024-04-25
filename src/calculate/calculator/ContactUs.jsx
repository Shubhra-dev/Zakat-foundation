import ques from "../../assets/Group.png";
import RoundedButton from "../../ui/RoundedButton";
function ContactUs() {
  return (
    <div className="bg-accentCyan/15 p-[4%] flex items-center">
      <div className="w-3/4 px-[5%]">
        <h2 className="text-accentCyan font-semibold text-6xl font-pally w-2/4">
          Do you still have Questions?
        </h2>
        <p className="text-neutral-800/80 text-xl font-normal w-3/4 py-6">
          If you have any other questions about calculating your Zakat or need
          extra support, get in touch to find out how else{" "}
          <strong>Zakat Foundation Bangladesh</strong> can help.
        </p>
        <RoundedButton>Contact Us</RoundedButton>
      </div>
      <div className="w-1/4">
        <img src={ques} alt="thinking" className=" object-contain w-[80%]" />
      </div>
    </div>
  );
}

export default ContactUs;
