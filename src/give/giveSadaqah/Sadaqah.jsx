import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import GiveLayout from "../GiveLayout";
import SadaqahHero from "./SadaqahHero";
import empower from "../../assets/empower.png";

function Sadaqah() {
  return (
    <GiveLayout tab={2}>
      <SadaqahHero />
      <EqualHeightFlexContainer addedClass="py-[3%] px-[5%] items-center">
        <div
          className="w-1/3 rounded-xl bg-cover bg-top"
          style={{ backgroundImage: `url(${empower})` }}
        ></div>
        <div className="w-2/3 p-[3%]">
          <h4 className="uppercase text-xl font-light text-secondary/80 pb-4">
            Give Sadaqah
          </h4>
          <h2 className="text-secondary font-semibold text-[50px] font-pally leading-tight pb-4">
            Empower our mission, support ZF BD Growth Fund, reach more Zakat
            givers in the Bangladesh
          </h2>
          <p className="text-xl font-light text-secondary/60">
            By donating to the Growth Fund, you’re helping to create a positive
            ripple effect across our community. Your contribution will help fund
            our growth and reach, which in turn, will help increase the number
            of people we can help through Zakat.
          </p>
        </div>
      </EqualHeightFlexContainer>
    </GiveLayout>
  );
}

export default Sadaqah;
