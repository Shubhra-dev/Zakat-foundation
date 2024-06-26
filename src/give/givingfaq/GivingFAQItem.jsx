import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";
function GivingFAQItem({ id, handleClickFAQ, active, ques }) {
  return (
    <div className="pb-2 sm:pb-4">
      {active !== id && (
        <div
          className=" w-full px-2 sm:px-[5%] border border-gray-200 py-[3%] shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center justify-between cursor-pointer"
          onClick={() => handleClickFAQ(id)}
        >
          <h3 className="text-s3 sm:text-s2 font-semibold text-secondary/60 px-4">
            {`${
              ques
                ? ques
                : "I usually give my Zakat abroad, why should I give it here in the Zakat?"
            }`}
          </h3>
          <div className="rounded-full w-max p-2 bg-secondary/20 text-2xl text-accentRed">
            <FaAngleDoubleRight className="text-xl" />
          </div>
        </div>
      )}
      {active === id && (
        <div
          onClick={() => handleClickFAQ(id)}
          className="px-2 sm:px-[5%] py-[3%] bg-accentRed border border-gray-200 shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center justify-between cursor-pointer"
        >
          <div className="px-4 text-primary">
            <h3 className="v font-semibold pb-4">
              {`${
                ques
                  ? ques
                  : "I usually give my Zakat abroad, why should I give it here in the Zakat?"
              }`}
            </h3>
            <p className="font-normal text-small sm:text-light">
              {`${
                ques
                  ? "Answer"
                  : "I usually give my Zakat abroad, why should I give it here in the Zakat?"
              }`}
            </p>
          </div>
          <div className="rounded-full w-max p-2 bg-primary text-2xl text-accentRed">
            <FaAngleDoubleUp className="text-xl" />
          </div>
        </div>
      )}
    </div>
  );
}

export default GivingFAQItem;
