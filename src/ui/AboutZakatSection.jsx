import Button from "./Button";
import about from "../assets/about.png";
import { useNavigate } from "react-router-dom";
function AboutZakatSection() {
  const nav = useNavigate();
  return (
    <div className="py-4 sm:py-12 w-full px-4 sm:px-0 sm:w-5/6 m-auto flex flex-col sm:flex-row justify-between sm:items-center">
      <div className="w-full sm:w-3/5">
        <h2 className="text-light sm:text-s2 tab:text-h4 text-center sm:text-left text-accentCyan font font-semibold">
          About Zakat
        </h2>
        <h1 className="text-secondary text-center sm:text-left text-h3 sm:text-s1 tab:text-title font-bold font-pally w-full sm:w-3/4 leading-tight tab:leading-[70px] py-2 sm:py-4">
          Understanding the Importance of Zakat
        </h1>
        <p className="text-secondary text-s3 sm:text-paragraph tab:text-s2 font-normal w-full sm:w-3/4 pb-8">
          Zakat is more than just a form of charity, it is a means to cleanse
          your wealth and grow closer to Allah. By giving Zakat, you are helping
          to create a more equitable society and providing essential support to
          those who need it most. Our mission is to ensure your contributions
          make a meaningful impact.
        </p>
        <div className="w-max m-auto sm:m-0">
          <Button
            bg={"bg-primary shadow-xl"}
            textColor={"text-accentCyan border border-gray-200 "}
            onClick={() => nav("/zakat/give")}
          >
            give zakat
          </Button>
        </div>
      </div>
      <div className="w-full sm:w-2/5 py-4 sm:py-0">
        <img src={about} alt="help" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default AboutZakatSection;
