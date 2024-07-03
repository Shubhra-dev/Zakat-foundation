import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import empower from "../../assets/empower.png";

function Empower() {
  return (
    <EqualHeightFlexContainer addedClass="flex-col sm:flex-row py-[3%] px-[5%] items-center">
      <div
        className="hidden sm:block w-1/3 rounded-xl bg-cover bg-top"
        style={{ backgroundImage: `url(${empower})` }}
      ></div>
      <div className="w-full sm:w-2/3 p-[3%]">
        <h4 className="uppercase text-center sm:text-left text-s3 sm:text-paragraph laptop:text-s2 font-light text-secondary/80 pb-4">
          Give Sadaqah
        </h4>
        <h2 className="text-secondary font-semibold text-center sm:text-left text-h3 sm:texts1 laptop:text-title font-pally leading-tight pb-4">
          Support our mission by contributing to the AL-ZAKATI Growth Fund,
          helping us expand our reach to more Zakat contributors in Bangladesh.
        </h2>
        <p className="text-s3 sm:text-s2 font-light text-secondary/60">
          When you donate to the Growth Fund, you&apos;re initiating a positive
          impact throughout our community. Your contribution will support our
          expansion efforts, enabling us to reach more people and extend our
          Zakat assistance to a greater number of individuals in need.
        </p>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default Empower;
