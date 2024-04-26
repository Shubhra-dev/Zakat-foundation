import RoundedButton from "../../ui/RoundedButton";
import CalculateLaoyout from "../CalculateLaoyout";
import AskHero from "./AskHero";
import QuestionForm from "./QuestionForm";
import Summary from "./Summary";

function AskQuestion() {
  return (
    <CalculateLaoyout tab={5}>
      <AskHero />
      <Summary />
      <QuestionForm />
      <div className="text-center pb-[5%]">
        <h2 className="w-3/5 m-auto text-secondary font-semibold text-[50px] font-pally py-[4%] leading-tight">
          Ready to word out your Zakat?
        </h2>
        <RoundedButton>Calculate my zakat</RoundedButton>
      </div>
    </CalculateLaoyout>
  );
}

export default AskQuestion;
