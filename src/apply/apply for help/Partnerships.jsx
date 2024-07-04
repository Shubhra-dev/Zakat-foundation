import ImageCard from "../../ui/ImageCard";
import partnership from "../../assets/partnership.jpg";
function Partnerships() {
  return (
    <div className="pt-[3%] px-8">
      <ImageCard
        img={partnership}
        imgPosition={"left"}
        w1={"w-full sm:w-[60%]"}
        w2={"w-full sm:w-[40%]"}
        rounded={true}
      >
        <h4 className="text-black text-s3 sm:text-paragraph laptop:text-s2 uppercase font-normal">
          Partnerships
        </h4>
        <h2 className="text-h3 sm:text-s1 laptop:text-title text-secondary font-bold font-pally">
          Let&apos;s collaborate
        </h2>
        <p className="text-s3 sm:text-paragraph text-secondary/60 font-normal">
          We&apos;re eager to partner with other organizations, businesses, and
          charities to effectively distribute Zakat in Bangladesh. If
          you&apos;re interested in joining forces with AL-Zakati, we encourage
          you to reach out to us.
        </p>
      </ImageCard>
    </div>
  );
}

export default Partnerships;
