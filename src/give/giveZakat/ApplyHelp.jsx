import { useNavigate } from "react-router-dom";
import RoundedButton from "../../ui/RoundedButton";
function ApplyHelp() {
  const navigate = useNavigate();
  return (
    // <div
    //   className={`bg-accentCyan m-[4%] py-[5%] rounded-xl -z-20 relative overflow-hidden`}
    // >
    //   <div
    //     className={`h-[150px] sm:h-[350px] w-[150px] sm:w-[350px] absolute -z-10 -bottom-14 -left-14 bg-gradient-to-t from-accentCyan to-primary/20 rounded-full`}
    //   ></div>
    //   <div
    //     className={`h-[150px] sm:h-[350px] w-[150px] sm:w-[350px] absolute -z-10 -top-14 -right-14 bg-gradient-to-b from-accentCyan to-primary/20 rounded-full`}
    //   ></div>
    //   <div className="w-11/12 laptop:w-9/12 m-auto text-center relative">
    //     <h2 className="text-primary relative font-bold text-[28px] sm:text-s1 laptop:text-title font-pally">
    //       Helping you donate Zakat to your local community
    //     </h2>
    //     <p className="text-primary relative text-s3 sm:text-s2 laptop:text-s1 font-light py-4">
    //       We encourage you to delve into our annual report for a thorough
    //       summary of our initiatives and accomplishments. Gain insight into how
    //       your Zakat is fostering enduring transformations in communities
    //       throughout Bangladesh
    //     </p>
    //   </div>
    //   <div className="w-max m-auto flex items-center gap-6 relative py-4">
    //     <RoundedButton
    //       onClick={() => navigate("/zakat/give")}
    //       bg={"bg-primary"}
    //       textColor={"text-accentCyan"}
    //     >
    //       Give Zakat
    //     </RoundedButton>
    //     <RoundedButton
    //       onClick={() => navigate("/apply_help")}
    //       bg={"bg-primary"}
    //       textColor={"text-accentRed"}
    //     >
    //       Apply for Help
    //     </RoundedButton>
    //   </div>
    // </div>
    <div
      className={`bg-accentCyan py-[5%] mx-[4%] my-[4%] rounded-xl relative overflow-hidden`}
    >
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -bottom-14 -left-14 bg-gradient-to-t from-accentCyan to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -top-14 -right-14 bg-gradient-to-b from-accentCyan to-primary/20 rounded-full`}
      ></div>
      <h2 className="w-5/6 laptop:w-3/5 m-auto text-center text-primary text-h3 sm:text-s1 laptop:text-title font-bold font-pally py-6 relative">
        Helping you donate Zakat to your local community
      </h2>
      <h2 className="w-5/6 laptop:w-4/5 m-auto text-center text-primary text-s3 sm:text-s2 laptop:text-s1 font-light font-pally py-6 relative">
        We encourage you to delve into our annual report for a thorough summary
        of our initiatives and accomplishments. Gain insight into how your Zakat
        is fostering enduring transformations in communities throughout
        Bangladesh
      </h2>

      <div className="w-max m-auto flex items-center gap-6 relative">
        <RoundedButton
          onClick={() => navigate("/zakat/give")}
          bg={"bg-primary"}
          textColor={"text-accentCyan"}
        >
          Give Zakat
        </RoundedButton>
        <RoundedButton
          onClick={() => navigate("/apply_help")}
          bg={"bg-primary"}
          textColor={"text-accentCyan"}
        >
          Apply for Help
        </RoundedButton>
      </div>
    </div>
  );
}

export default ApplyHelp;
