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
        <h2 className="text-secondary font-semibold text-center sm:text-left text-h3 sm:text-s1 laptop:text-[48px] font-pally leading-tight pb-4">
          Support our mission by contributing to the AL-ZAKATI Growth Fund
        </h2>
        <p className="text-s3 sm:text-s2 font-light text-secondary/60">
          Your Sadaqah contributions to the AL-ZAKATI Growth Fund are an
          investment in the future of our community. By donating to the Growth
          Fund, you help us:
        </p>
        <ul className="list-decimal list-inside text-s3 sm:text-s2 font-light text-secondary/60 space-y-2 pt-2">
          <li>
            <span className="text-bold text-black">Expand Our Reach:</span>{" "}
            Connect with more Zakat contributors across Bangladesh, raising
            awareness about the importance of Zakat and its impact.
          </li>
          <li>
            <span className="text-bold text-black">
              Create a Ripple Effect of Goodness:
            </span>{" "}
            Every ৳1 you donate to the Growth Fund enables us to raise
            approximately ৳6 in Zakat, creating a 600% return on your charitable
            investment.
          </li>
        </ul>
        <p className="text-s3 sm:text-s2 font-light text-secondary/60 py-4">
          Your support doesn’t just provide immediate relief—it builds the
          foundation for long-term change, empowering us to reach more people
          and transform more lives.
        </p>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default Empower;
