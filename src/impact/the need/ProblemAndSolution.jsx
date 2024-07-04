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
          bg={"bg-secondary/10"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            The problem
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            Despite Zakat being a fundamental pillar of Islam, its impact in
            Bangladesh falls short of its potential. Many Muslims across the
            country have the means to contribute Zakat but may not fully
            understand its local importance.
          </p>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60">
            In Bangladesh, a substantial portion of the Muslim population faces
            poverty, significantly exceeding the national average. Nearly half
            of Bangladeshi Muslims live below the poverty line. Additionally,
            there is apprehension among some sectors about Islam&apos;s
            compatibility with traditional Bangladeshi culture. This perception
            poses challenges, especially for emerging religious leaders and
            community influencers who could drive positive social change but
            often lack adequate financial support.
          </p>
        </ImageCard>
      </div>
      <div className="pb-[4%] px-[3%] mb-6 laptop:mb-10">
        <ImageCard
          img={needImage2}
          w1={"w-full sm:w-[65%]"}
          w2={"w-full sm:w-[35%] hidden sm:block"}
          bg={"bg-secondary/10"}
          imgPosition={"left"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            The solution
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            Zakat holds tremendous potential, and it is our collective
            responsibility to ensure it realizes that potential.
          </p>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            We enable Muslims to fulfill their Zakat obligations by directing it
            to those rightfully entitled to receive it in Bangladesh.
          </p>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            We are establishing the first national network dedicated to
            distributing Zakat to those in need across our country.
            Additionally, we provide an online platform for calculating and
            donating Zakat that adheres to our faith principles.
          </p>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            You will have the opportunity to specify how your Zakat is
            allocated. Through our personalized approach, you can be confident
            that your Zakat will reach its intended recipients and be used
            effectively right here in Bangladesh
          </p>
        </ImageCard>
      </div>
      <div className="pb-[4%] px-[3%] mb-6 laptop:mb-10">
        <ImageCard
          img={needImage3}
          w1={"w-full sm:w-2/3"}
          w2={"w-full sm:w-1/3"}
          bg={"bg-secondary/10"}
        >
          <h2 className="font-bold text-center sm:text-left text-h3 sm:text-s1 laptop:text-title font-pally leading-tight pb-4 text-secondary">
            Your role
          </h2>
          <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60 pb-4">
            By giving Zakat through AL-ZAKATI, you’re part of the solution.
          </p>
          <ul className="px-6 list-disc font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60">
            <li>
              You&apos;re assisting individuals in realizing their potential.
            </li>
            <li>
              You&apos;re fostering a vibrant, cohesive Muslim community across
              Bangladesh.
            </li>
            <li>
              And you&apos;re actively participating in an inspiring movement
              for positive change.
            </li>
          </ul>
        </ImageCard>
      </div>
    </>
  );
}

export default ProblemAndSolution;
