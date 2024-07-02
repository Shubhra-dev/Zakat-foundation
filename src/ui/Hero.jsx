import Button from "./Button";
import herobg from "../assets/herobg.png";

function Hero() {
  return (
    <div
      className="h-[280px] sm:h-[350px] tab:h-[400px] laptop:h-[550px] large:h-[700px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="h-full w-full bg-secondary/60 sm:pt-[5%] large:pt-[10%]">
        <div className="h-1/4 hidden laptop:block"></div>
        <div className="h-1/3 w-11/12 sm:w-3/5 m-auto text-center py-8 sm:py-0">
          <h2 className="text-primary font-semibold text-h3 laptop:text-title large:text-[70px] font-pally">
            Giving Back to the Community
            <span className="hidden sm:inline">, One Donation at a Time</span>
          </h2>
          <p className="text-primary text-s3 sm:text-light laptop:text-s2 font-light pt-2 pb-4">
            Your Zakat transforms lives and supports those in need. Together, we
            can make a difference
          </p>
          <Button bg={"bg-accentCyan"}>give zakat</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
