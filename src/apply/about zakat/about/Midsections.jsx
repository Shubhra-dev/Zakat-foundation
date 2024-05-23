import ImageCard from "../../../ui/ImageCard";
import abz1 from "../../../assets/abz1.jpg";
import abz2 from "../../../assets/abz2.jpg";
import abz3 from "../../../assets/abz3.jpg";
import Title from "../../../ui/Title";
import P from "../../../ui/P";
function Midsections() {
  return (
    <>
      <div className="p-[3%]">
        <ImageCard
          img={abz1}
          bg={"bg-accentCyan/10"}
          imgPosition={"left"}
          rounded={true}
          w1={"w-[60%]"}
          w2={"w-[40%]"}
          padding={"pb-0"}
        >
          <Title textColor={"text-secondary"}>What is Zakat</Title>
          <P>
            Zakat is the third pillar of Islam, and a key part of the Islamic
            socio-economic system. By giving part of their wealth as Zakat,
            Muslims perform a religious duty, cleanse their own wealth in the
            eyes of God, and help to uplift the faith and standard of life of
            the entire Muslim community.
          </P>
        </ImageCard>
      </div>
      <div className="px-[3%]">
        <ImageCard
          img={abz2}
          bg={"bg-accentRed/10"}
          imgPosition={"right"}
          rounded={true}
          w1={"w-[60%]"}
          w2={"w-[40%]"}
          padding={"pb-0"}
        >
          <Title textColor={"text-secondary"}>Purpose of Zakat</Title>
          <P>
            Zakat is not just random charity, it’s a unique form of religious
            social welfare with specific guidelines about who should receive it
            and a purpose it should achieve. Its ultimate aim is to strengthen
            faith and uphold the religion of Islam by providing a safety net for
            certain set categories of Muslims.
          </P>
          <h3 className="text-accentRed font-bold text-paragraph cursor-pointer py-2">
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
          w1={"w-[60%]"}
          w2={"w-[40%]"}
          padding={"pb-0"}
        >
          <Title textColor={"text-secondary"}>How Zakat Works</Title>
          <P>
            To make sure Zakat achieves its purpose, is used in the right way to
            help those who should be receiving it, Zakat needs to be
            administered properly. In this section you can find out more about
            how Zakat works to positively change the lives of Muslims as
            individuals and to create a thriving, closer Muslim community.
          </P>
          <h3 className="text-accentRed font-bold text-paragraph cursor-pointer py-2">
            Read More
          </h3>
        </ImageCard>
      </div>
    </>
  );
}

export default Midsections;
