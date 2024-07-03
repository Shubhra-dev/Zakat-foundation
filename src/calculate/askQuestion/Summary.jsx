import { GoCheckCircle } from "react-icons/go";
function Summary() {
  return (
    <>
      <div className="text-center">
        <h2 className="w-5/6 laptop:w-3/5 m-auto text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally py-[4%] leading-tight">
          Want to ask us a question about calculating your Zakat?
        </h2>
      </div>
      <div className="flex items-center gap-4 w-5/6 laptop:w-3/5 m-auto pb-6">
        <GoCheckCircle className="text-accentRed text-3xl" />
        <p className=" font-normal text-small sm:text-s2 text-secondary/80">
          If our{" "}
          <span className="font-semibold text-accentPurple cursor-pointer">
            FAQ&apos;s
          </span>{" "}
          doesn’t have the answer, you can send us your question and we&apos;ll
          get back to you as soon as we can.
        </p>
      </div>
      <div className="flex items-center gap-4 w-5/6 laptop:w-3/5 m-auto pb-6">
        <GoCheckCircle className="text-accentRed text-3xl" />
        <p className=" font-normal text-small sm:text-s2 text-secondary/80">
          Our experienced Zakat scholars will answer your question and enable
          you to fulfil your obligation accurately and confidently.
        </p>
      </div>
    </>
  );
}

export default Summary;
