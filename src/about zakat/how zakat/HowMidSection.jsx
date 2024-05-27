import Title from "../../ui/Title";
import Purpose from "../../assets/Purpose.png";

function HowMidsection() {
  return (
    <div className="py-[3%]">
      <Title textColor={"text-secondary"} add={"text-center"}>
        Who should be getting Zakat?
      </Title>
      <p className="w-4/6 m-auto list-disc pt-4 font-normal text-paragraph text-secondary/80">
        The Qur’an tells us eight groups of people who should be given Zakat:
      </p>
      <div className="w-5/6 m-auto flex items-end">
        <p className="w-1/2 laptop:w-[60%] pt-4 font-normal text-paragraph text-secondary/80">
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
        <div className="w-1/2 laptop:w-[40%] h-full">
          <img
            src={Purpose}
            alt="purpose"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
      <p className="w-5/6 m-auto list-disc pt-4 font-normal text-paragraph text-secondary/80">
        (Qur’an, Chapter 9, Verse 60)
      </p>
    </div>
  );
}

export default HowMidsection;
