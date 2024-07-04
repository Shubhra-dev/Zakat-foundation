import { useState } from "react";
import GivingFAQItem from "../give/givingfaq/GivingFAQItem";
const ques1 = [
  { id: 1, ques: "What can I get help with?" },
  { id: 2, ques: "How much help can I get?" },
  { id: 3, ques: "What happens once I have applied?" },
  { id: 4, ques: "What information and documents do I need to give?" },
  { id: 5, ques: "What if I am not happy with your service?" },
];
const ques2 = [
  { id: 6, ques: "Can I apply?" },
  { id: 27, ques: "How long will it take to get help?" },
  { id: 38, ques: "How many times can I apply?" },
  { id: 49, ques: "How will the help be given?" },
  { id: 50, ques: "How can I get more information?" },
];

function FAQSection() {
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
              ques={item.ques}
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
              ques={item.ques}
              active={openFaqId}
              handleClickFAQ={handleClickFAQ}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQSection;
