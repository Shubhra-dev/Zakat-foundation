import H1 from "../../ui/H1";
import Purpose from "../../assets/Purpose.png";

function Midsection() {
  return (
    <div className="py-[3%]">
      <H1 textColor={"text-secondary"} add={"text-center"}>
        What is the purpose of Zakat
      </H1>
      <ul className="w-5/6 m-auto list-disc pt-4">
        <li className="font-normal text-s3 sm:text-paragraph text-secondary/80">
          The purpose of Zakat is ultimately to increase faith and devotion to
          Allah (God). It also acts as a social safety net for those in need and
          a means to uplift the entire community and help Muslims and Islam
          thrive. Zakat is a pillar of Islam and as such it works together with
          the other four pillars as a way of upholding and strengthening the
          religion.
        </li>
      </ul>
      <div className="w-5/6 m-auto flex flex-col sm:flex-row items-center pt-4">
        <ul className="w-full sm:w-1/2 laptop:w-[60%] list-disc font-normal text-s3 sm:text-paragraph text-secondary/80">
          <li>
            By giving Zakat Muslims cleanse their own wealth. Zakat helps to
            keep the economy flowing by freeing people from burden and giving
            them the chance to reach their potential. Find out more about the
            objective of Zakat.
          </li>
          <li className="py-2 sm:pt-4">
            Zakat, when it works properly, should have a long-term impact for
            the state of the whole Muslim community.
          </li>
        </ul>
        <div className="w-full sm:w-1/2 laptop:w-[40%] h-full pt-4 sm:pt-0">
          <img
            src={Purpose}
            alt="purpose"
            className="h-full w-full object-fit"
          />
        </div>
      </div>
    </div>
  );
}

export default Midsection;
