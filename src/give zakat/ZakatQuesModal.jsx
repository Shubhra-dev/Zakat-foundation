import P from "../ui/P";

function ZakatQuesModal() {
  return (
    <div className="bg-secondary relative w-full h-full">
      <div className="fixed w-2/5 top-[25%] m-auto p-4 bg-primary">
        <P>
          Choose exact amount or enter own amount to give, for monthly giving
          (you can choose your bank direct debit date during payment). Your
          Zakat will help eligible Muslims in need with essential living
          expenses (such as food and clothing), housing support or education and
          training to help them take control of their lives. You can choose how
          your Zakat is used after making your payment.
        </P>
        <button className="bg-accentPurple text-primary px-5 py-2 rounded-md text-paragraph  font-semibold">
          More About Zakat
        </button>
      </div>
    </div>
  );
}

export default ZakatQuesModal;
