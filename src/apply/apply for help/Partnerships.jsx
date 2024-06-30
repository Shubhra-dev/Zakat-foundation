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
        <h4 className="text-black text-s3 sm:text-s2 uppercase font-normal">
          Partnerships
        </h4>
        <h2 className="text-h3 sm:text-title text-secondary font-bold font-pally">
          Let&apos;s work together
        </h2>
        <p className="text-s3 sm:text-paragraph text-secondary/60 font-normal">
          We’re keen to work with other organisations, businesses and charities
          to help bring Zakat to life in the Bangladesh. If you&apos;re
          interested in partnering with Zakat Foundation Bangladesh (ZF BD) we
          want to hear from you now.
        </p>
      </ImageCard>
    </div>
  );
}

export default Partnerships;
