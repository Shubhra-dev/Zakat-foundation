import Button from "./Button";
import story1 from "../assets/story1.png";
import story2 from "../assets/story2.png";
import story3 from "../assets/story3.png";
import CardItem from "./CardItem";
function Cards() {
  return (
    <div className="w-full sm:w-5/6 m-auto px-4 sm:px-0 py-4 sm:py-12 mb-10">
      <h3 className="text-accentCyan text-center sm:text-left text-light sm:text-paragraph tab:text-h4 font-semibold py-2">
        Impact Stories
      </h3>
      <div className="flex flex-col sm:flex-row justify-between items-center pb-4 sm:pb-10">
        <h1 className="text-h3 sm:text-s1 laptop:text-title text-center sm:text-left font-pally font-bold text-secondary">
          How Your Zakat Makes a Difference
        </h1>
        <Button bg={"bg-accentRed"}>view all stories</Button>
      </div>
      <div className="flex flex-col laptop:flex-row justify-between items-center">
        <CardItem
          img={story2}
          title={" Story of  Umair"}
          text={
            "After the tragic and untimely death of her parents, Umair was left all alone in an orphanage. But due to the various donations provided by generous Muslims, she was able to complete his education and secure a job and earn for herself."
          }
        />
        <CardItem
          img={story1}
          title={" Story of Amina"}
          text={
            "After listening to the message of Islam, our dear sister has reverted to Islam but in the process lost the help of her previous family. So, to get back on her feet, the Zakat donated by the Muslims helped her profoundly."
          }
        />
        <CardItem
          img={story3}
          title={" Story of Muzahid"}
          text={
            "Muzahid has been suffering from leukemia for the past  5 years. Three years ago, his funding for the treatment stopped, he almost lost all hope, but due to the Zakat contribution he was able to continue his treatment"
          }
        />
      </div>
    </div>
  );
}

export default Cards;
