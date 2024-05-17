import StorySub from "../../assets/StorySub.jpg";
import ApplyHelp from "../../give/giveZakat/ApplyHelp";
import ImageCard from "../../ui/ImageCard";
function ImpactLastSection() {
  return (
    <div className="py-[5%] px-[4%]">
      <ImageCard img={StorySub}>
        <h2 className="font-bold text-title font-pally leading-tight pb-4 text-secondary">
          Zakat is more than just a payment
        </h2>
        <p className="font-light text-paragraph text-secondary/60">
          When it works effectively, it’s a unique form of religious social
          welfare which uplifts the whole community and helps people get out of
          difficult situations and reach their potential. These stories of real
          Muslims who have been helped by your Zakat are all based on real
          cases, though the names have been changed in some of them. We hope
          they bring the impact you’re having to life.
        </p>
      </ImageCard>
      <ApplyHelp />
    </div>
  );
}

export default ImpactLastSection;
