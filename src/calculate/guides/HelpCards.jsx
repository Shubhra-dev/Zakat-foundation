import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import { FiEdit } from "react-icons/fi";
function HelpCards({ bg, title, text }) {
  return (
    <EqualHeightFlexContainer addedClass="items-center justify-start w-full bg-secondary/20 rounded-xl mb-[2%]">
      <div className={`w-1/12 py-4 ${bg} rounded-r-full flex items-center`}>
        <FiEdit className="hidden sm:block m-auto text-3xl text-primary" />
      </div>
      <div className="w-11/12 py-4 pl-4 pr-[5%]">
        <h3 className="text-s2 sm:text-h3 laptop:text-[40px] text-secondary font-bold font-pally leading-tight pb-2">
          {title}
        </h3>
        <p className="text-small sm:text-paragraph laptop:text-s2 text-secondary/60 font-normal">
          {text}
        </p>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default HelpCards;
