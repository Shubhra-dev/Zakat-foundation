import ImageCard from "../../ui/ImageCard";
import needImage1 from "../../assets/needImage1.jpg";
import needImage2 from "../../assets/needImage2.jpg";
function ProblemAndSolution() {
  return (
    <>
      <div className="pt-[4%] px-[3%]">
        <ImageCard
          img={needImage1}
          w1={"w-[65%]"}
          w2={"w-[35%]"}
          bg={"bg-secondary/10"}
        >
          <h2 className="font-bold text-title font-pally leading-tight pb-4 text-secondary">
            The problem
          </h2>
          <p className="font-light text-paragraph text-secondary/60 pb-4">
            Despite Zakat being a fundamental tenet of Islam, its impact in
            Bangladesh isn&apos;t as significant as it could be. There are
            numerous Muslims throughout the country who have the means to
            contribute Zakat but might not be aware of the necessity to do so in
            their local context.
          </p>
          <p className="font-light text-paragraph text-secondary/60">
            Many Muslims in Bangladesh are grappling with poverty, hindering
            their ability to thrive. Nearly half of the Muslim population in
            Bangladesh is living below the poverty line, which is significantly
            higher than the national average of 21%*. Moreover, there&apos;s
            concern as a significant portion of the population perceives Islam
            as a threat to the traditional way of life in Bangladesh.
            Unfortunately, emerging religious leaders and other community
            influencers, who could potentially drive positive change, are often
            constrained by financial limitations.
          </p>
        </ImageCard>
      </div>
      <div className="pb-[4%] px-[3%]">
        <ImageCard
          img={needImage2}
          w1={"w-[65%]"}
          w2={"w-[35%]"}
          bg={"bg-secondary/10"}
          imgPosition={"left"}
        >
          <h2 className="font-bold text-title font-pally leading-tight pb-4 text-secondary">
            The solution
          </h2>
          <p className="font-light text-paragraph text-secondary/60 pb-4">
            Zakat holds immense promise, and it&apos;s our collective
            responsibility to ensure it fulfills that promise.
          </p>
          <p className="font-light text-paragraph text-secondary/60 pb-4">
            We provide Muslims with a means to actualize Zakat, directing it to
            those who are rightfully entitled to receive it in Bangladesh.
          </p>
          <p className="font-light text-paragraph text-secondary/60 pb-4">
            We&apos;re building the first national network dedicated to
            delivering Zakat to those in need within our country. Additionally,
            we offer an online platform for calculating and giving Zakat that
            aligns with our faith.
          </p>
          <p className="font-light text-paragraph text-secondary/60 pb-4">
            You&apos;ll have the opportunity to specify how your Zakat is
            allocated. With our personalized approach, you can trust that your
            Zakat will reach its intended recipients and be utilized
            appropriately, right here in Bangladesh.
          </p>
        </ImageCard>
      </div>
    </>
  );
}

export default ProblemAndSolution;
