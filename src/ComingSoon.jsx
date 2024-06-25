import empower from "./assets/herobg.png";
import { TypeAnimation } from "react-type-animation";

function ComingSoon() {
  return (
    <div
      className="min-h-screen font-outfit bg-cover"
      style={{ backgroundImage: `url(${empower})` }}
    >
      <div className="py-[5%] px-6 min-h-screen bg-black/70 w-full">
        <div className="flex items-center justify-center py-2 rounded-xl bg-green-700 w-max m-auto px-4">
          {/* <img src={logo} alt="logo" className="h-[75px] w-max" /> */}
          <h2 className="text-[3em] text-primary  font-black uppercase">
            AlZakati.COm
          </h2>
        </div>
        <h2 className="text-center text-primary font-pally text-title font-bold w-full">
          The website
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              " is Under Development",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              " will Launch Soon",
              1000,
              // wait 1s before replacing "Mice" with "Hamsters"
            ]}
            wrapper="span"
            speed={30}
            style={{ fontSize: "1.5em", display: "block" }}
            repeat={Infinity}
          />
        </h2>
        <div className="w-full sm:w-1/2 m-auto text-center py-10 px-4 sm:px-0">
          <p className="text-gray-300 text-2xl font-medium">
            Our website is currently under development. We will be launching
            shortly. Thank you for your patience.
          </p>
          <div className="pt-10 text-center w-full sm:w-max sm:m-auto">
            <p className="font-semibold text-gray-300 text-2xl bg-accentRed/70 px-2 py-3 rounded-xl">
              Mail us at - info@alzakati.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
