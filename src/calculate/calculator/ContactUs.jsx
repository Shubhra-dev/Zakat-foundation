import { useNavigate } from "react-router-dom";
import ques from "../../assets/Group.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import RoundedButton from "../../ui/RoundedButton";
function ContactUs({ textColor, buttonBg, bg }) {
  const navigate = useNavigate();
  return (
    <EqualHeightFlexContainer
      addedClass={`${bg ? bg : "bg-accentCyan/15"} p-[4%] items-center`}
    >
      <div className=" w-full sm:w-3/5 laptop:w-3/4 px-[5%] py-[6%]">
        <h2
          className={`${
            textColor ? textColor : "text-accentCyan"
          } font-semibold text-h3 sm:text-s1 laptop:text-title leading-tight font-pally text-center sm:text-left sm:w-2/4`}
        >
          Do you still have Questions?
        </h2>
        <p className="text-neutral-800/80 text-s3 sm:text-s2 font-normal sm:w-3/4 py-6">
          If you want to know more about the calculation process or need extra
          support, you can get in touch with
          <strong> Al-Zakati</strong> so that we can provide our help.
        </p>
        <div className="w-max m-auto sm:w-auto">
          <RoundedButton
            bg={buttonBg ? buttonBg : ""}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </RoundedButton>
        </div>
      </div>
      <div
        className="hidden sm:block w-2/5 laptop:w-1/4 bg-fill bg-no-repeat bg-center rounded-md"
        style={{ backgroundImage: `url(${ques})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default ContactUs;
