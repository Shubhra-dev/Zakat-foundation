import RoundedButton from "../../ui/RoundedButton";
import zakatNeed from "../../assets/zakatNeed.png";
import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
function WhyNeed() {
  return (
    <EqualHeightFlexContainer addedClass="flex-col sm:flex-row bg-primary p-[4%] items-center">
      <div className="w-5/6 sm:w-3/5 px-[3%]">
        <h2 className="text-secondary text-center sm:text-left font-semibold text-h3 sm:text-s1 laptop;text-title font-pally w-full sm:w-3/4 pb-4">
          Why your Zakat contribution is essential for us
        </h2>
        <p className="text-neutral-800/80 text-light sm:text-paragraph laptop:text-s2 font-normal w-full sm:w-3/4 py-2 text-center sm:text-left">
          Your Zakat is more than just a mere donation, it is an important
          foundation to create socio-economic balance in the muslim ummah.
        </p>
        <p className="text-neutral-800/80 text-light sm:text-paragraph laptop:text-s2 font-normal w-full sm:w-3/4 py-2 text-center sm:text-left">
          Throughout Bangladesh, countless Muslims face dire circumstances and
          are hindered by financial limitations. However, there exists a remedy.
          Your Zakat holds the ability to positively impact the lives of Muslims
          in your community, and it is within your control to ensure it fulfills
          its potential.
        </p>
        <div className="w-max m-auto sm:m-0 py-2">
          <RoundedButton bg={"bg-accentCyan"} padding={"px-6 py-4"}>
            Find out more
          </RoundedButton>
        </div>
      </div>
      <div
        className="w-full sm:w-2/5 rounded-xl bg-cover bg-top"
        style={{ backgroundImage: `url(${zakatNeed})` }}
      ></div>
    </EqualHeightFlexContainer>
  );
}

export default WhyNeed;
