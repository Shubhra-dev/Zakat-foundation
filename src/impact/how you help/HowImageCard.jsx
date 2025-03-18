import ImageCard from "../../ui/ImageCard";
import how2 from "../../assets/how2.jpg";

function HowImageCard() {
  return (
    <div className="py-[4%] bg-primary px-[3%]">
      <h2 className="text-center w-11/12 laptop:w-4/5 m-auto text-secondary font-semibold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        How your support makes a difference
      </h2>
      <p className="text-center w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-2">
        By giving Zakat through AL-ZAKATI you enable us to be there for Muslims
        in need throughout the country and help unlock the potential of Muslims
        being held back by their financial circumstances. <br />
        By giving Zakat through AL-ZAKATI, you enable us to:
      </p>
      <ul className="list-disc list-inside w-11/12 laptop:w-4/5 m-auto font-normal text-s3 sm:text-paragraph laptop:text-s2 text-secondary/80 pb-[3%] space-y-2 pt-2">
        <li>
          <span className="text-bold text-black">
            Be There for Muslims in Need:
          </span>{" "}
          Your Zakat provides immediate relief to those facing financial
          hardship, ensuring they have access to essential resources.
        </li>
        <li>
          <span className="text-bold text-black">Unlock Potential:</span> Your
          contribution helps Muslims overcome financial barriers, empowering
          them to reach their full potential.
        </li>
        <li>
          <span className="text-bold text-black">Pool Resources:</span> Your
          Zakat is combined with contributions from other donors, creating a
          powerful collective impact that transforms lives across Bangladesh.
        </li>
        <li>
          <span className="text-bold text-black">
            Distribute Strategically:
          </span>{" "}
          We spread Zakat distributions throughout the year, ensuring your
          contribution reaches those who need it most, exactly when they need
          it.
        </li>
      </ul>
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
        <ul className="px-4 sm:px-[6%] text-s3 sm:text-light laptop:text-paragraph font-light text-secondary/60 py-2 list-disc list-inside space-y-2">
          <li>
            <span className="font-bold text-black/60">Hardship Relief:</span>{" "}
            Provides swift access to funds for essential living expenses like
            food, clothing, and medical care, helping families in acute
            difficulty.
          </li>
          <li>
            <span className="font-bold text-black/60">Housing:</span>
            Supports Muslims in achieving stability by facilitating access to
            secure and affordable housing, ensuring they have a safe place to
            call home.
          </li>

          <li>
            <span className="font-bold text-black/60">Employment:</span>
            Assists individuals in securing employment and regaining
            independence by offering vocational training, job placement support,
            and financial assistance.
          </li>
          <li>
            <span className="font-bold text-black/60">Education:</span>
            Invests in the education and development of emerging Muslim
            religious leaders and community advocates, fostering long-term
            growth and positive change.
          </li>
        </ul>
      </ImageCard>
    </div>
  );
}

export default HowImageCard;
