import H1 from "../ui/H1";
import P from "../ui/P";
import IconBox from "./IconBox";
import { LuMail, LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
function ContactCard() {
  return (
    <div className="w-full sm:w-2/5 bg-accentRed rounded-xl p-8 relative overflow-hidden">
      <H1 font={"font-pally"} add={"pb-4"}>
        Contact Us
      </H1>
      <P textColor={"text-primary"}>
        You can send us your thoughts, messages or suggestion anytime from
        anywhere. We would love to hear from you.
      </P>
      <div className="pt-4">
        <IconBox text={"+880 1XXX XXXXXX"}>
          <LuPhoneCall className="text-2xl tab:text-3xl text-primary" />
        </IconBox>
        <IconBox text={"info@alzakati.com"}>
          <LuMail className="text-2xl tab:text-3xl text-primary" />
        </IconBox>
        <IconBox text={"support@alzakati.com"}>
          <LuMail className="text-2xl tab:text-3xl text-primary" />
        </IconBox>
        <IconBox text={"House#32, Road#19, Banani Dhaka-1213"}>
          <IoLocationOutline className="text-2xl tab:text-3xl text-primary" />
        </IconBox>
      </div>
      <div
        className={`h-[300px] w-[300px] absolute -bottom-14 -right-14 bg-gradient-to-b from-primary/30 to-accentRed/10 to-90% rounded-full`}
      ></div>
    </div>
  );
}

export default ContactCard;
