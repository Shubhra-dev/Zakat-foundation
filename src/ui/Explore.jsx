import { useNavigate } from "react-router-dom";
import Button from "./Button";
import EqualHeightFlexContainer from "./EqualHeightFlexContainer";

function Explore() {
  const navigate = useNavigate();
  return (
    <div className="w-11/12 m-auto flex flex-col tab:flex-row gap-4 items-center mt-2 tab:-mt-12 pb-4 tab:pb-12 px-6 sm:px-0">
      <EqualHeightFlexContainer addedClass="w-full tab:w-4/5 flex-col tab:flex-row gap-2 tab:gap-0 items-start">
        <div className="tab:h-full w-full sm:W-1/4 py-4 px-6 shadow-xl rounded-2xl bg-primary">
          <h2 className="text-secondary font-semibold text-paragraph sm:text-s2 large:text-h4 pb-2">
            What is Zakat?
          </h2>
          <p className="pb-2 text-s3 sm:text-paragraph text-secondary font-normal">
            Zakat is mandatory charitable contribution to redistribute wealth
            and support those in need. It is one of the Five Pillars of Islam.
          </p>
          <button
            onClick={() => navigate("/about_zakat")}
            className="capitalize text-accentRed text-paragraph sm:text-s2 font-semibold cursor-pointer py-2"
          >
            read more
          </button>
        </div>
        <div className="tab:h-full w-full sm:W-1/4 py-4 px-6 shadow-xl rounded-2xl sm:-ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-paragraph sm:text-s2 large:text-h4 pb-2">
            Why Give Zakat?
          </h2>
          <p className="pb-2 text-s3 sm:text-paragraph text-secondary font-normal">
            Giving Zakat purifies your wealth, fosters community solidarity, and
            provides essential support to those facing hardship.
          </p>
          <button
            onClick={() => navigate("/zakat_purpose")}
            className="capitalize text-accentRed text-paragraph sm:text-s2 font-semibold cursor-pointer py-2 flex-grow"
          >
            read more
          </button>
        </div>
        <div className="tab:h-full w-full sm:W-1/4 py-4 px-6 shadow-xl rounded-2xl sm:-ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-paragraph sm:text-s2 large:text-h4 pb-2">
            Who Receives Zakat?
          </h2>
          <p className="pb-2 text-s3 sm:text-paragraph text-secondary font-normal">
            Zakat is distributed to specific group including the needy, those in
            debt, and other eligible recipients in Islamic law.
          </p>
          <button
            onClick={() => navigate("/how_it_works")}
            className="capitalize text-accentRed text-paragraph sm:text-s2 font-semibold cursor-pointer py-2"
          >
            read more
          </button>
        </div>
        <div className="tab:h-full w-full sm:W-1/4 py-4 px-6 shadow-xl rounded-2xl sm:-ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-paragraph sm:text-s2 large:text-h4 pb-2">
            Calculating Zakat?
          </h2>
          <p className="pb-2 text-s3 sm:text-paragraph text-secondary font-normal">
            Calculating Zakat can be complex. Use our easy-to-follow guide to
            determine how much Zakat you owe based on your assets.
          </p>
          <button
            onClick={() => navigate("/calculate")}
            className="capitalize text-accentRed text-paragraph sm:text-s2 font-semibold cursor-pointer py-2"
          >
            know more
          </button>
        </div>
      </EqualHeightFlexContainer>
      <div className="w-full tab:w-1/5 py-4 px-6 bg-accentRed rounded-xl shadow-xl text-primary">
        <h2 className="font-semibold text-paragraph sm:text-s2 large:text-h4 pb-2">
          Explore More
        </h2>
        <p className="pb-2 text-s3 sm:text-paragraph font-normal">
          Explore more about Zakat, Sadaqah, Nisab and all. Know more about the
          importance of Zakat. Find how to calculate and much more.
        </p>
        <Button
          textColor={"text-accentRed"}
          onClick={() => navigate("/about_zakat")}
        >
          read more
        </Button>
      </div>
    </div>
  );
}

export default Explore;
