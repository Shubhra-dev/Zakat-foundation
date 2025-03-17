import abz1 from "../../assets/abz1.jpg";
import abz2 from "../../assets/abz2.jpg";
import abz3 from "../../assets/abz3.jpg";
import H1 from "../../ui/H1";
import ImageCard from "../../ui/ImageCard";
import P from "../../ui/P";
import { useNavigate } from "react-router-dom";
function Midsections() {
  const navigate = useNavigate();
  return (
    <>
      <div className="p-[3%]">
        <ImageCard
          img={abz1}
          bg={"bg-accentCyan/10"}
          imgPosition={"left"}
          rounded={true}
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%]"}
          padding={"pb-0"}
        >
          <H1 textColor={"text-secondary"}>What is Zakat</H1>
          <P>
            Zakat is the third pillar of Islam, a divine obligation that every
            eligible Muslim must fulfill. It is not just a charitable act but a
            form of worship that purifies wealth, strengthens faith, and fosters
            social justice. As Allah (SWT) says in the Qur’an: “Take from their
            wealth a charity to purify and sanctify them…” (Qur’an, 9:103) By
            giving a portion of their wealth to those in need, Muslims fulfill a
            sacred duty, cleanse their wealth in the eyes of Allah (SWT), and
            contribute to the well-being of the entire Muslim community. Zakat
            is a cornerstone of the Islamic socio-economic system, designed to
            balance wealth distribution and ensure that no one is left behind.
          </P>
        </ImageCard>
      </div>
      <div className="px-[3%]">
        <ImageCard
          img={abz2}
          bg={"bg-accentRed/10"}
          imgPosition={"right"}
          rounded={true}
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%] hidden sm:block"}
          padding={"pb-0"}
        >
          <H1 textColor={"text-secondary"}>Purpose of Zakat</H1>
          <P>
            The primary purpose of Zakat is to increase faith and devotion to
            Allah (SWT). It serves as both a spiritual act of worship and a
            social responsibility. Here’s how Zakat benefits individuals and the
            community:
          </P>
          <ul className="list-decimal list-inside text-base space-y-2">
            <li>
              <strong> Spiritual Purification:</strong> Zakat cleanses the
              giver’s wealth and soul, reminding Muslims that their wealth is a
              trust from Allah (SWT).
            </li>
            <li>
              <strong>Social Safety Net:</strong> Zakat provides essential
              support to the poor and needy, ensuring they have access to basic
              necessities like food, shelter, and clothing. The Prophet Muhammad
              (PBUH) said: “The believer’s shade on the Day of Resurrection will
              be their charity.” (Tirmidhi)
            </li>
            <li>
              <strong>Economic Balance:</strong> By redistributing wealth, Zakat
              keeps the economy flowing, freeing people from debt and poverty,
              and giving them the opportunity to reach their full potential.
            </li>
            <li>
              <strong>Community Upliftment:</strong> Zakat strengthens the
              Muslim Ummah by fostering unity, compassion, and social justice.
              It helps create a society where everyone can thrive.
            </li>
            <li>
              <strong>Long-Term Impact:</strong> When Zakat is distributed
              effectively, it has a lasting positive impact on the entire Muslim
              community, empowering individuals and transforming lives.
            </li>
          </ul>
          <h3
            onClick={() => navigate("/zakat_purpose")}
            className="text-accentRed font-bold text-base underline w-max hover:text-gray-500 am:text-paragraph cursor-pointer py-2"
          >
            Read More
          </h3>
        </ImageCard>
      </div>
      <div className="p-[3%]">
        <ImageCard
          img={abz3}
          bg={"bg-accentPurple/10"}
          imgPosition={"left"}
          rounded={true}
          w1={"w-full sm:w-[60%]"}
          w2={"w-full sm:w-[40%]"}
          padding={"pb-0"}
        >
          <H1 textColor={"text-secondary"}>How Zakat Works</H1>
          <P>
            The Qur’an clearly outlines eight categories of people who are
            eligible to receive Zakat: “Indeed, Zakat expenditures are only for
            the poor and the needy, and for those who work on [administering]
            it, and for bringing hearts together, and for freeing those in
            bondage, and for those in debt, and for the cause of Allah, and for
            the stranded traveler. [This is] an obligation from Allah. And Allah
            is All-Knowing, All-Wise.” (Qur’an, 9:60) <br />
            Here’s a breakdown of the eight categories:
          </P>
          <ul className="list-decimal list-inside text-base space-y-2">
            <li>
              <strong> The Poor (Al-Fuqara):</strong> Those who lack basic
              necessities and cannot meet their daily needs.
            </li>
            <li>
              <strong>The Needy (Al-Masakin):</strong> Those who are in
              difficulty but may not appear destitute.
            </li>
            <li>
              <strong>Zakat Administrators:</strong> Individuals or
              organizations responsible for collecting and distributing Zakat.
            </li>
            <li>
              <strong>Those Whose Hearts are to be Reconciled:</strong> New
              Muslims or those inclined toward Islam.
            </li>
            <li>
              <strong>Freeing Slaves:</strong> Helping individuals escape
              bondage or oppression.
            </li>
            <li>
              <strong>Those in Debt:</strong> People burdened by debts they
              cannot repay.
            </li>
            <li>
              <strong>In the Cause of Allah (Fi Sabilillah):</strong> Supporting
              righteous causes like education, community development, or
              humanitarian projects.
            </li>
            <li>
              <strong>The Stranded Traveler (Ibnus-Sabil):</strong> Travelers in
              need of assistance to return home or continue their journey.
            </li>
          </ul>
          <P add={"mt-2"}>
            At Al Zakati, we ensure that your Zakat is distributed to those who
            truly qualify under these categories, maximizing its impact and
            fulfilling your religious duty.
          </P>
          <h3
            onClick={() => navigate("/how_it_works")}
            className="hover:text-gray-500 underline text-accentRed font-bold text-base am:text-paragraph cursor-pointer py-2"
          >
            Read More
          </h3>
        </ImageCard>
      </div>
    </>
  );
}

export default Midsections;
