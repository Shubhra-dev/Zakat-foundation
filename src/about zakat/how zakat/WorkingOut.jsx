import EqualHeightFlexContainer from "../../ui/EqualHeightFlexContainer";
import RoundedButton from "../../ui/RoundedButton";
import donate from "../../assets/donate.jpg";
function WorkingOut() {
  return (
    <EqualHeightFlexContainer addedClass={"w-5/6 m-auto py-4"}>
      <div className="w-1/2 py-8">
        <div
          className={`bg-cover bg-top w-full h-full rounded-l-xl`}
          style={{ backgroundImage: `url(${donate})` }}
        ></div>
      </div>
      <div className="rounded-xl bg-accentRed p-4 w-1/2 shadow-xl">
        <h2 className="text-primary text-center text-title font-bold pb-4 font-pally">
          Working out my Zakat
        </h2>
        <p className="text-primary text-paragraph font-light pb-4">
          Our simple to use calculator will help take the stress out of working
          out your Zakat amount. Put simply, there are 4 simple steps to working
          out your Zakat:
        </p>
        <ul className="text-primary text-paragraph font-light pb-4 list-disc pl-8">
          <li>Work out what you own</li>
          <li>Then take off what you owe</li>
          <li>
            Work out the balance and check that it’s more than the Nisab value
          </li>
          <li>
            Work out 2.5% of that and there you go, you’ve got your Zakat amount
          </li>
        </ul>
        <div className="w-max m-auto py-4">
          <RoundedButton bg={"bg-primary"} textColor={"text-accentRed"}>
            Learn more about Zakat
          </RoundedButton>
        </div>
      </div>
    </EqualHeightFlexContainer>
  );
}

export default WorkingOut;
