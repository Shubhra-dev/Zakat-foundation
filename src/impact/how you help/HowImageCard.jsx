import ImageCard from "../../ui/ImageCard";
import how2 from "../../assets/how2.jpg";

function HowImageCard() {
  return (
    <div className="py-[4%] bg-primary px-[3%]">
      <h2 className="text-center w-4/5 m-auto text-secondary font-semibold text-[55px] font-pally pb-4">
        How you help
      </h2>
      <p className="text-center w-4/5 m-auto font-normal text-xl text-secondary/80 pb-[3%]">
        By giving Zakat through National Zakat Foundation you enable us to be
        there for Muslims in need throughout the country and help unlock the
        potential of Muslims being held back by their financial circumstances.
        Your Zakat is added to the funds you have chosen and pooled together
        with the Zakat of other local Muslims nationwide who have chosen to
        bring Zakat to life here in the UK. We spread the distribution of Zakat
        throughout the year so that we’re able to use your Zakat to help Muslims
        who qualify for Zakat when they need it most.
      </p>
      <ImageCard img={how2} w1="w-[60%]" w2={"w-[40%]"} bg={"bg-secondary/10"}>
        <h2 className="font-bold text-title font-pally leading-tight pb-4 text-secondary">
          The four funds
        </h2>
        <p className="font-light text-paragraph text-secondary/60">
          Muslims in need of Zakat can apply to one of four funds.
        </p>
        <ul className="px-[6%] text-paragraph font-light text-secondary/60 py-2 list-disc">
          <li>
            Hardship Relief- help Muslims in desperation get through a rough
            patch by giving them quick access to funds to cover basic living
            expenses such as food and clothing.
          </li>
          <li>
            Housing- help Muslims get back on their feet with secure, affordable
            accommodation.
          </li>
          <li>
            Work- help Muslims by providing the support they need to find a job
            and take control of their lives.
          </li>
          <li>
            Education- strengthen the community by investing in the education
            and development of emerging Muslim religious leaders and other
            community champions.
          </li>
        </ul>
      </ImageCard>
    </div>
  );
}

export default HowImageCard;
