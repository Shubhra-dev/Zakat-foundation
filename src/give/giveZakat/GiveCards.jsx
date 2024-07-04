import GIveCardItem from "./GIveCardItem";
function GiveCards() {
  return (
    <div className="pb-4 relative -z-10">
      <GIveCardItem
        text={
          "You can select how to distribute your Zakat across three funds: Hardship Relief, Housing & Work/Education."
        }
      />
      <GIveCardItem
        text={
          "You can select to contribute a small extra amount to cover distribution expenses, ensuring that 100% of your Zakat reaches the recipient directly."
        }
      />
      <GIveCardItem
        text={
          "You can consider donating Sadaqah or Riba to support our operational costs, enabling us to expand our outreach and raise more Zakat funds.."
        }
      />
      <GIveCardItem
        text={
          "Stay informed with our ZakaTracker, which provides real-time updates on the distribution and impact of your Zakat, transforming the lives of Muslims in Bangladesh."
        }
      />
    </div>
  );
}

export default GiveCards;
