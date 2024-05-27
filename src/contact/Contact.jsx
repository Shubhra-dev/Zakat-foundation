import contact from "../assets/contact.jpg";
import EqualHeightFlexContainer from "../ui/EqualHeightFlexContainer";
import H1 from "../ui/H1";
import P from "../ui/P";
import ContactInput from "./ContactInput";
import IconBox from "./IconBox";
import { LuMail, LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";

function Contact() {
  return (
    <>
      <div
        className="bg-cover bg-top w-full"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="h-full w-full bg-black/55 pt-[10%] pb-[8%] text-center">
          <h2 className="text-primary font-semibold text-[70px] font-pally w-4/5 m-auto leading-tight">
            Get In Touch
          </h2>
        </div>
      </div>
      <div className="w-5/6 laptop:w-4/6 m-auto bg-primary rounded-xl p-4 -mt-16 shadow-xl mb-[4%]">
        <EqualHeightFlexContainer>
          <div className="w-2/5 bg-accentRed rounded-xl p-8 relative overflow-hidden">
            <H1 font={"font-pally"} add={"pb-4"}>
              Contact Us
            </H1>
            <P textColor={"text-primary"}>
              Lorem ipsum dolor sit amet consectetur. Feugiat a hendrerit eget
              etiam in nunc morbi et.
            </P>
            <div className="pt-4">
              <IconBox text={"+880 1XXX XXXXXX"}>
                <LuPhoneCall className="text-3xl text-primary" />
              </IconBox>
              <IconBox text={"example@foundation.com"}>
                <LuMail className="text-3xl text-primary" />
              </IconBox>
              <IconBox text={"Example Street, Dhaka, Bangladesh"}>
                <IoLocationOutline className="text-3xl text-primary" />
              </IconBox>
            </div>
            <div
              className={`h-[300px] w-[300px] absolute -bottom-14 -right-14 bg-gradient-to-b from-primary/30 to-accentRed/10 to-900% rounded-full`}
            ></div>
          </div>
          <div className="w-3/5 relative">
            <h2 className="text-center py-4 text-title font-pally font-bold text-secondary">
              Want to get in touch?
            </h2>
            <div className="px-6">
              <div className="flex gap-6">
                <ContactInput
                  id={"firstName"}
                  placeholder={"First Name"}
                  w={"w-1/2"}
                />
                <ContactInput
                  id={"lastName"}
                  placeholder={"Last/Sur Name"}
                  w={"w-1/2"}
                />
              </div>
              <div className="py-4">
                <ContactInput
                  id={"email"}
                  placeholder={"Email"}
                  type={"email"}
                />
                <select
                  name="purpose"
                  id="purpose"
                  className={`py-2 my-4 font-normal text-paragraph border-b border-b-gray-300 w-full text-secondary/60`}
                >
                  <option value="">Nature of Enquiry</option>
                  <option value="">Zakat</option>
                  <option value="">Sadaqah</option>
                  <option value="">Nisab</option>
                </select>
              </div>
              <textarea
                name="message"
                id="message"
                placeholder="Message/Your Question"
                rows={4}
                className={`py-2 my-4 font-normal text-paragraph border-b border-b-gray-300 w-full`}
              ></textarea>
              <div className="w-ful m-auto">
                <button className="rounded-full w-full text-primary bg-gradient-to-r from-accentRed to-accentPurple text-paragraph font-semibold py-2">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </EqualHeightFlexContainer>
      </div>
    </>
  );
}

export default Contact;
