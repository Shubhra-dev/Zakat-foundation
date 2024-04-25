import Button from "./Button";
import herobg from "../assets/herobg.png";

function Hero() {
  return (
    <div
      className="h-[750px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="h-full w-full bg-secondary/45">
        <div className="h-1/3"></div>
        <div className="h-1/4"></div>
        <div className="h-1/3 w-3/5 m-auto text-center">
          <h2 className="text-primary font-semibold text-[55px] font-pally">
            Lorem ipsum dolor sit amet consectetur
          </h2>
          <p className="text-primary text-sm font-light pt-2 pb-4">
            Lorem ipsum dolor sit amet consectetur. Nisl arcu congue eget vitae
            justo orci id nunc. Sapien sit viverra eget commodo interdum varius
            commodo cras. A quis pretium sit risus. Suspendisse amet nam lacus
            malesuada augue mauris. Semper risus vulputate odio natoque ac
            consequat mattis felis. Nisl mi varius elit et nulla.
          </p>
          <Button bg={"bg-accentCyan"}>give zakat</Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
