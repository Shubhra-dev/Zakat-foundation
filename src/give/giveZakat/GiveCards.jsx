import GIveCardItem from "./GIveCardItem";
function GiveCards() {
  return (
    <div className="pb-4">
      <GIveCardItem
        text={
          "Choose how to allocate your Zakat across three funds: Hardship Relief, Housing & Work/Education."
        }
      />
      <GIveCardItem
        text={
          "Choose to pay a small add-on to cover distribution costs so that 100% of your Zakat goes directly to the recipient."
        }
      />
      <GIveCardItem
        text={
          "Choose to make a donation of Sadaqah or Riba to help us cover our running costs so that we can spread the message of our work and raise more Zakat funds."
        }
      />
      <GIveCardItem
        text={
          "Our ZakaTracker will keep you up to date on when your Zakat is given out and update you on how it’s helping to change the lives of fellow Muslims here in the Bangladesh."
        }
      />
    </div>
  );
}

export default GiveCards;
