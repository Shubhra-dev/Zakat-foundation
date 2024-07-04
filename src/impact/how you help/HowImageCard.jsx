import ImageCard from "../../ui/ImageCard";
import how2 from "../../assets/how2.jpg";

function HowImageCard() {
  return (
    <div className="py-[4%] bg-primary px-[3%]">
      <h2 className="text-center w-11/12 laptop:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        How your support makes a difference
      </h2>
      <p className="text-center w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%]">
        By giving Zakat through AL-ZAKATI you enable us to be there for Muslims
        in need throughout the country and help unlock the potential of Muslims
        being held back by their financial circumstances. Your Zakat is added to
        the funds you have chosen and pooled together with the Zakat of other
        local Muslims nationwide who have chosen to bring Zakat to life here in
        Bangladesh. We spread the distribution of Zakat throughout the year so
        that we’re able to use your Zakat to help Muslims who qualify for Zakat
        when they need it most.
      </p>
      <ImageCard
        img={how2}
        w1="w-full sm:w-[60%]"
        w2={"w-full sm:w-[40%]"}
        bg={"bg-secondary/10"}
        rounded={true}
      >
        <h2 className="font-bold text-h3 sm:text-s1 laptop:text-title text-center sm:text-left font-pally leading-tight pb-4 text-secondary">
          The four funds
        </h2>
        <p className="font-light text-s3 sm:text-light laptop:text-paragraph text-secondary/60">
          Muslims eligible for Zakat can apply for assistance through four
          distinct funds.
        </p>
        <ul className="px-4 sm:px-[6%] text-s3 sm:text-light laptop:text-paragraph font-light text-secondary/60 py-2 list-disc">
          <li>
            Hardship Relief: Aid Muslims facing acute difficulties by providing
            swift access to funds for essential living expenses like food and
            clothing
          </li>
          <li>
            Housing: Support Muslims in achieving stability by facilitating
            access to secure and affordable housing.
          </li>
          <li>
            Employment: Assist Muslims in securing employment and regaining
            independence by offering necessary support.
          </li>
          <li>
            Education: Foster community growth by investing in the education and
            development of emerging Muslim religious leaders and community
            advocates.
          </li>
        </ul>
      </ImageCard>
    </div>
  );
}

export default HowImageCard;
