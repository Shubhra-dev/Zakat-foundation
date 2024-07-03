import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import nisabQues from "../../assets/nisabQues.png";
import FaqItem from "./FaqItem";
import { useState } from "react";
import nisabFaq from "./nisabFaq";
function NisabQuestions() {
  const [openFaqId, setOpenFaqId] = useState("");
  function handleClickFAQ(id) {
    if (openFaqId) {
      if (openFaqId === id) setOpenFaqId("");
      else setOpenFaqId(id);
    } else setOpenFaqId(id);
  }
  return (
    <div className="px-[3%] pt-[5%]">
      <EqualHeightFlexContainer>
        <div className="hidden tab:block w-1/3">
          <img
            src={nisabQues}
            alt="question mark"
            className="w-full object-cover h-[90%] laptop:h-[80%] rounded-xl"
          />
        </div>
        <div className=" w-full tab:w-2/3 pl-[3%] pb-[5%]">
          <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-8">
            Nisab Related Questions
          </h2>
          <div className="flex flex-col justify-between gap-6">
            {nisabFaq.map((item) => (
              <FaqItem
                key={item.id}
                item={item}
                active={openFaqId}
                handleClickFAQ={handleClickFAQ}
              />
            ))}
          </div>
        </div>
      </EqualHeightFlexContainer>
    </div>
  );
}

export default NisabQuestions;
