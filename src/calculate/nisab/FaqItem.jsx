import { FaAngleDoubleRight, FaAngleDoubleUp } from "react-icons/fa";
function FaqItem({ item, handleClickFAQ, active }) {
  return (
    <>
      {active !== item.id && (
        <div
          className="px-[5%] border border-gray-200 py-[3%] shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center cursor-pointer"
          onClick={() => handleClickFAQ(item.id)}
        >
          <div className="rounded-full w-max p-2 bg-secondary/20 text-2xl text-accentRed">
            <FaAngleDoubleRight className="text-xl" />
          </div>
          <h3 className="text-light sm:text-h4 laptop:text-h3 font-semibold text-secondary px-4">
            {item.ques}
          </h3>
        </div>
      )}
      {active === item.id && (
        <div
          onClick={() => handleClickFAQ(item.id)}
          className="px-[5%] py-[3%] bg-accentRed border border-gray-200 shadow-[1px_1px_25px_1px_rgba(0,0,0,0.15)] rounded-2xl flex items-center cursor-pointer"
        >
          <div className="rounded-full w-max p-2 bg-primary text-accentRed">
            <FaAngleDoubleUp className="text-xl" />
          </div>
          <div className="px-4 text-primary">
            <h3 className="text-light sm:text-h4 laptop:text-h3 font-semibold pb-4">
              {item.ques}
            </h3>
            <p className="font-normal text-small sm:text-light laptop:text-paragraph">
              {item.ans}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default FaqItem;
