import Title from "../../../ui/Title";
import ZakatLayout from "../ZakatLayout";
import PurposeHero from "./PurposeHero";
import Purpose from "../../../assets/Purpose.png";
import GetTouch from "../../../give/givingfaq/GetTouch";
function PurposeOfZakat() {
  return (
    <ZakatLayout tab={2}>
      <PurposeHero />
      <div className="py-[3%]">
        <Title textColor={"text-secondary"} add={"text-center"}>
          What is the purpose of Zakat
        </Title>
        <ul className="w-4/6 m-auto list-disc pt-4">
          <li className="font-normal text-paragraph text-secondary/80">
            The purpose of Zakat is ultimately to increase faith and devotion to
            Allah (God). It also acts as a social safety net for those in need
            and a means to uplift the entire community and help Muslims and
            Islam thrive. Zakat is a pillar of Islam and as such it works
            together with the other four pillars as a way of upholding and
            strengthening the religion.
          </li>
        </ul>
        <div className="w-4/6 m-auto flex pt-4 items-center">
          <ul className="w-[60%] flex flex-col h-full list-disc font-normal text-paragraph text-secondary/80">
            <li>
              By giving Zakat Muslims cleanse their own wealth. Zakat helps to
              keep the economy flowing by freeing people from burden and giving
              them the chance to reach their potential. Find out more about the
              objective of Zakat.
            </li>
            <li className="pt-4 flex-grow">
              Zakat, when it works properly, should have a long-term impact for
              the state of the whole Muslim community.
            </li>
          </ul>
          <div className="w-[40%] h-min">
            <img
              src={Purpose}
              alt="purpose"
              className="h-fullw-full object-cover"
            />
          </div>
        </div>
      </div>
      <GetTouch button1={"Give zakat"} button2={"Apply for help"} />
    </ZakatLayout>
  );
}

export default PurposeOfZakat;
