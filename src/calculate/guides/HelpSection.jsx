import HelpCards from "./HelpCards";
function HelpSection() {
  return (
    <div className="py-[5%] px-[2%]">
      <h2 className="text-secondary font-bold text-h3 sm:text-title font-pally text-center px-6 sm:px-0 pb-[2%]">
        Our Zakat guides will help you to..
      </h2>
      <HelpCards
        bg="bg-accentRed"
        title="Calculate your Zakat in 3 simple steps."
        text="Enter your assets’ details, subtract your liabilities, and apply
              the Nisab threshold to determine your Zakatable amount. Quick,
              easy, and Sharia-compliant."
      />
      <HelpCards
        bg="bg-accentCyan"
        title="Understand what Zakat is and why it should be paid."
        text="Zakat is a pillar of Islam, purifying wealth by redistributing a portion to those in need. It fosters social harmony by supporting the less fortunate and cleansing the giver’s wealth."
      />
      <HelpCards
        bg="bg-accentPurple"
        title="Discover who is eligible to receive Zakat."
        text="Zakat is destined for eight specific categories, including the poor, needy, and those working to distribute it. Identifying the right recipients ensures compliance and maximizes benefits."
      />
      <HelpCards
        bg="bg-secondary"
        title="Learn when to pay Zakat and where it can be distributed."
        text="Zakat is due annually after one lunar year of meeting the Nisab threshold. It can be distributed locally or globally, focusing on eradicating poverty and distress in the Muslim community."
      />
    </div>
  );
}

export default HelpSection;
