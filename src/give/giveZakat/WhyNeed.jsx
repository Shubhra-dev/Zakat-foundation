import RoundedButton from "../../ui/RoundedButton";
import zakatNeed from "../../assets/zakatNeed.png";
function WhyNeed() {
  return (
    <div className="bg-primary p-[4%] flex items-center">
      <div className="w-3/4 px-[5%]">
        <h2 className="text-secondary font-semibold text-6xl font-pally w-2/4 pb-4">
          Why your Zakat is needed here
        </h2>
        <p className="text-neutral-800/80 text-xl font-normal w-3/4 py-2">
          Your Zakat is more than just a payment, it’s a way to create social
          change.
        </p>
        <p className="text-neutral-800/80 text-xl font-normal w-3/4 py-[3%]">
          Across the UK, thousands of Muslims are living in desperate situations
          and being held back by lack of money. But there is a solution. Your
          Zakat has the power to change the lives of Muslims where you live, and
          it’s up to you to make sure it achieves that potential.
        </p>
        <RoundedButton bg={"bg-accentCyan"} padding={"px-6 py-4"}>
          Find out more
        </RoundedButton>
      </div>
      <div className="w-1/4">
        <img
          src={zakatNeed}
          alt="thinking"
          className=" object-contain w-[80%]"
        />
      </div>
    </div>
  );
}

export default WhyNeed;
