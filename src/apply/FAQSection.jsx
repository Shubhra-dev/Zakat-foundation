import { useState } from "react";
import GivingFAQItem from "../give/givingfaq/GivingFAQItem";

function FAQSection({ ques1, ques2 }) {
  const [openFaqId, setOpenFaqId] = useState("");
  function handleClickFAQ(id) {
    if (openFaqId) {
      if (openFaqId === id) setOpenFaqId("");
      else setOpenFaqId(id);
    } else setOpenFaqId(id);
  }
  return (
    <div className="bg-slate-100">
      <h2 className="text-accentPurple font-semibold text-h3 tab:text-s1 sm:text-title font-pally pt-2 tab:pt-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="py-[3%] px-4 tab:px-[2%] flex flex-col tab:flex-row gap-1 tab:gap-6 w-full">
        <div className="w-full tab:w-1/2">
          {ques1.map((item) => (
            <GivingFAQItem
              key={item.id}
              id={item.id}
              ques={item.question}
              answer={item.answer}
              active={openFaqId}
              handleClickFAQ={handleClickFAQ}
            />
          ))}
        </div>
        <div className="w-full tab:w-1/2">
          {ques2.map((item) => (
            <GivingFAQItem
              key={item.id}
              id={item.id}
              ques={item.question}
              answer={item.answer}
              active={openFaqId}
              handleClickFAQ={handleClickFAQ}
            />
          ))}
          <GivingFAQItem
            id={"lastFaq"}
            ques={"How can I get more information?"}
            answer={
              "For more information on applying on this fund, please send us a message"
            }
            active={openFaqId}
            button={true}
            handleClickFAQ={handleClickFAQ}
          />
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
