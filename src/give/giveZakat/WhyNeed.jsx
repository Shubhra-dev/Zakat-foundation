import RoundedButton from "../../ui/RoundedButton";
import zakatNeed from "../../assets/zakatNeed.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function WhyNeed() {
  return (
    <EqualHeightFlexContainer addedClass="flex-col sm:flex-row bg-primary p-[4%] items-center">
      <div className="w5/6 sm:w-3/5 px-[3%]">
        <h2 className="text-secondary text-center sm:text-left font-semibold text-h3 sm:text-title font-pally w-full sm:w-3/4 pb-4">
          Why your Zakat is needed here
        </h2>
        <p className="text-neutral-800/80 text-light sm:text-s2 font-normal w-full sm:w-3/4 py-2 text-center sm:text-left">
          Your Zakat is more than just a payment, it’s a way to create social
          change.
        </p>
        <p className="text-neutral-800/80 text-light sm:text-s2 font-normal w-full sm:w-3/4 py-2 text-center sm:text-left">
          Across the UK, thousands of Muslims are living in desperate situations
          and being held back by lack of money. But there is a solution. Your
          Zakat has the power to change the lives of Muslims where you live, and
          it’s up to you to make sure it achieves that potential.
        </p>
        <div className="w-max m-auto sm:m-0 py-2">
          <RoundedButton bg={"bg-accentCyan"} padding={"px-6 py-4"}>
            Find out more
          </RoundedButton>
        </div>
      </div>
      <div
        className="w-full smw-2/5 rounded-xl bg-cover bg-top"
        style={{ backgroundImage: `url(${zakatNeed})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default WhyNeed;
