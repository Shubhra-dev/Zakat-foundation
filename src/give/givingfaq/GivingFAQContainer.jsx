import { useState } from "react";
import GivingFAQItem from "./GivingFAQItem";

function GivingFAQContainer() {
  const [openFaqId, setOpenFaqId] = useState("");
  function handleClickFAQ(id) {
    if (openFaqId) {
      if (openFaqId === id) setOpenFaqId("");
      else setOpenFaqId(id);
    } else setOpenFaqId(id);
  }
  return (
    <>
      <h2 className="text-secondary font-semibold text-h3 sm:text-title font-pally pt-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="py-[3%] px-[2%] flex flex-col sm:flex-row gap-2 sm:gap-6 w-full">
        <div className="w-11/12 m-auto sm:m-0 sm:w-1/2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <GivingFAQItem
              key={item}
              id={item}
              active={openFaqId}
              handleClickFAQ={handleClickFAQ}
            />
          ))}
        </div>
        <div className="w-11/12 m-auto sm:m-0 sm:w-1/2">
          {[7, 8, 9, 10, 11, 12].map((item) => (
            <GivingFAQItem
              key={item}
              id={item}
              active={openFaqId}
              handleClickFAQ={handleClickFAQ}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GivingFAQContainer;
