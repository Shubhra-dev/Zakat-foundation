import HelpCards from "./HelpCards";
function HelpSection() {
  return (
    <div className="py-[5%] px-[2%]">
      <h2 className="text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally text-center px-6 tab:px-0 pb-[2%]">
        Our Zakat guides will help you to..
      </h2>
      <HelpCards
        bg="bg-accentRed"
        title="Calculate your Zakat in 3 simple steps."
        text="Input your asset details, deduct your liabilities, and use the Nisab threshold to find your Zakatable amount. It's fast, simple, and compliant with Sharia"
      />
      <HelpCards
        bg="bg-accentCyan"
        title="Learn about Zakat and the importance of paying it"
        text="Zakat, one of the pillars of Islam, purifies wealth by allocating a portion to those in need. It promotes social harmony by aiding the less fortunate and purifying the giver’s wealth."
      />
      <HelpCards
        bg="bg-accentPurple"
        title="Find out who is eligible for receiving zakat"
        text="Zakat is allocated to eight specific categories, such as the poor, the needy, and those involved in its distribution. Properly identifying the eligible recipients ensures compliance and maximizes its impact."
      />
      <HelpCards
        bg="bg-secondary"
        title="Discover the timing and the method of distribution of zakat."
        text="Zakat is payable annually after one lunar year of reaching the Nisab threshold. It can be distributed both locally and globally, with a focus on alleviating poverty and distress within the Muslim community."
      />
    </div>
  );
}

export default HelpSection;
