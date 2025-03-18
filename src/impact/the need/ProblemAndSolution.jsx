import ImageCard from "../../ui/ImageCard";
import needImage1 from "../../assets/needImage1.jpg";
import needImage2 from "../../assets/needImage2.jpg";
import needImage3 from "../../assets/needImage3.jpg";
function ProblemAndSolution() {
  return (
    <>
      <div className="pt-[4%] px-[3%] mb-6 laptop:mb-10">
        <ImageCard
          img={needImage1}
          w1={"w-full sm:w-[65%]"}
          w2={"w-full sm:w-[35%]"}
          bg={"bg-ash/10"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            The problem
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            Despite Zakat being a fundamental pillar of Islam, its potential
            impact in Bangladesh remains largely untapped. Many Muslims who have
            the means to contribute Zakat may not fully understand its local
            importance or how to distribute it effectively. In Bangladesh, a
            significant portion of the Muslim population lives in poverty, with
            nearly half struggling below the poverty line. Additionally, there
            are misconceptions about Islam’s compatibility with traditional
            Bangladeshi culture, creating challenges for emerging religious
            leaders and community influencers who lack the financial support
            needed to drive positive change.
          </p>
        </ImageCard>
      </div>
      <div className="pb-[4%] px-[3%] mb-6 laptop:mb-10">
        <ImageCard
          img={needImage2}
          w1={"w-full sm:w-[65%]"}
          w2={"w-full sm:w-[35%] hidden sm:block"}
          bg={"bg-ash/10"}
          imgPosition={"left"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            The solution
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            Zakat has the power to transform lives, and it’s our collective
            responsibility to ensure it reaches its full potential. At
            AL-ZAKATI, we:
          </p>
          <ul className="px-4 space-y-2 sm:px-8 laptop:px-[2%] list-disc font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 py-4">
            <li>
              <span className="font-bold text-black/70">
                Enable Muslims to Fulfill Their Zakat Obligations:{" "}
              </span>
              By providing a trusted platform to calculate and distribute Zakat
              in accordance with Islamic principles.
            </li>
            <li>
              <span className="font-bold text-black/70">
                Build a National Network:{" "}
              </span>
              Establishing the first nationwide system to distribute Zakat to
              those in need across Bangladesh.
            </li>
            <li>
              <span className="font-bold text-black/70">
                Offer a Personalized Approach:{" "}
              </span>
              Allowing you to specify how your Zakat is allocated, ensuring it
              reaches its intended recipients and creates maximum impact.
            </li>
          </ul>
        </ImageCard>
      </div>
      <div className="pb-[4%] px-[3%] mb-6 laptop:mb-10">
        <ImageCard
          img={needImage3}
          w1={"w-full sm:w-2/3"}
          w2={"w-full sm:w-1/3"}
          bg={"bg-ash/10"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            Your role
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            By giving Zakat through AL-ZAKATI, you’re part of the solution.
            You’re:
          </p>
          <ul className="px-4 space-y-2 sm:px-8 laptop:px-[2%] list-disc font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 py-4">
            <li>
              <span className="font-bold text-black/70">
                Helping Individuals Realize Their Potential:{" "}
              </span>
              Providing them with the resources and opportunities they need to
              succeed.
            </li>
            <li>
              <span className="font-bold text-black/70">
                Building a Stronger Community:{" "}
              </span>
              Fostering unity and cohesion among Muslims across Bangladesh.
            </li>
            <li>
              <span className="font-bold text-black/70">
                Driving Positive Change:{" "}
              </span>
              Contributing to a movement that uplifts lives, strengthens faith,
              and creates a brighter future for all.
            </li>
          </ul>
        </ImageCard>
      </div>
    </>
  );
}

export default ProblemAndSolution;
