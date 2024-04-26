import RoundedButton from "../../ui/RoundedButton";
function QuestionForm() {
  return (
    <div className="text-center bg-slate-100 py-[3%]">
      <h2 className="text-secondary font-semibold text-[50px] py-[3%] font-pally leading-tight">
        Send us your question
      </h2>
      <div className="w-4/5 m-auto">
        <div className="flex w-full justify-between pb-[3%]">
          <input
            type="text"
            placeholder="First Name"
            className="w-[45%] py-3 px-2 text-secondary/60 text-xl border border-b-gray-400 rounded-sm"
          />
          <input
            type="text"
            placeholder="Sur/Last Name"
            className="w-[45%] py-3 px-2 text-secondary/60 text-xl border border-b-gray-400 rounded-sm"
          />
        </div>
        <div className="w-full pb-[3%]">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full py-3 px-2 text-secondary/60 text-xl border border-b-gray-400 rounded-sm"
          />
        </div>
        <div className="w-full pb-[3%]">
          <select className="w-full py-3 px-2 text-secondary/60 text-xl border border-b-gray-400 rounded-sm">
            <option value="">Type of Enquiry</option>
            <option value="">Zakat</option>
            <option value="">Nisab</option>
            <option value="">Sadaqah</option>
          </select>
        </div>
        <div className="w-full pb-[3%]">
          <textarea
            rows={4}
            placeholder="Message/Question"
            className="w-full py-3 px-2 text-secondary/60 text-xl border border-b-gray-400 rounded-sm"
          />
        </div>
        <RoundedButton
          bg={"bg-gradient-to-r from-accentRed to-accentPurple"}
          padding={"px-10 py-3"}
        >
          Submit
        </RoundedButton>
      </div>
    </div>
  );
}

export default QuestionForm;
