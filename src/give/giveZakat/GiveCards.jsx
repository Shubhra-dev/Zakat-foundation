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
          "You have the option to contribute a small additional amount to cover administrative and distribution costs. This ensures that every penny of your Zakat goes directly to those in need, maximizing its impact."
        }
      />
      <GIveCardItem
        text={
          "Consider donating Sadaqah or Riba to help cover our operational expenses. These contributions enable us to expand our outreach, raise more Zakat funds, and assist even more people in need."
        }
      />
      <GIveCardItem
        text={
          "Our ZakaTracker tool provides real-time updates on the distribution and impact of your Zakat. From the moment your contribution is received to the lives it transforms, you’ll have complete transparency and peace of mind."
        }
      />
    </div>
  );
}

export default GiveCards;
