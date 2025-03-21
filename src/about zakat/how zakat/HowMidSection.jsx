import H1 from "../../ui/H1";
import Purpose from "../../assets/Purpose.png";

function HowMidsection() {
  return (
    <div className="py-[3%] px-6 sm:px-0">
      <H1 textColor={"text-secondary"} add={"text-center"}>
        Who should be getting Zakat?
      </H1>
      <p className="w-full text-center laptop:text-left laptop:w-4/6 laptop:m-auto list-disc pt-4 font-normal text-s3 sm:text-paragraph text-secondary/80">
        The Qur’an tells us eight groups of people who should be given Zakat:
      </p>
      <div className="w-full sm:w-5/6 m-auto flex flex-col sm:flex-row items-end">
        <p className="w-full sm:w-1/2 laptop:w-[60%] pt-4 font-normal text-s3 sm:text-paragraph text-secondary/80">
          Indeed, Zakat expenditures are only for
          <span className="block">[1] the poor and</span>
          <span className="block">[2] the needy, and</span>
          <span className="block">
            [3] to those who work on [administering] it, and
          </span>
          <span className="block">[4] for bringing hearts together, and</span>
          <span className="block">[5] to [free] those in bondage, and</span>
          <span className="block">[6] for those in debt, and</span>
          <span className="block">[7] for the cause of God, and</span>
          <span className="block">
            [8] for the stranded traveller. [This is] an obligation from God.
            God is All-Knowing,
          </span>{" "}
          All-Wise.”
        </p>
        <div className="w-full sm:w-1/2 laptop:w-[40%] h-full">
          <img
            src={Purpose}
            alt="purpose"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
      <p className="w-5/6 m-auto list-disc pt-4 font-normal text-s3 sm:text-paragraph text-secondary/80">
        (Qur’an, Chapter 9, Verse 60)
      </p>
    </div>
  );
}

export default HowMidsection;
