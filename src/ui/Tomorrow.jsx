import hand from "../assets/hand.png";
import { FaQuoteLeft } from "react-icons/fa";
function Tomorrow() {
  return (
    <div className="bg-accentCyan/10">
      <div className="flex items-start w-5/6 mx-auto mb-[8%]">
        <div className="w-2/5 rounded-md -mb-[8%] mt-[8%]">
          <img src={hand} alt="hand" className="h-full w-[70%] object-cover" />
        </div>
        <div className="w-3/5 pt-[8%]">
          <h2 className="text-2xl text-accentCyan font font-semibold">
            About Zakat
          </h2>
          <h1 className="text-secondary text-[55px] font-bold font-pally w-3/4 leading-[70px] py-4">
            You Have The Power To Change Tomorrow
          </h1>
          <p className="text-secondary text-sm font-normal w-3/4 pb-[6%]">
            Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla
            magna ut. Viverra ultricies sit quis facilisi id id tristique
            tempus. Sit elementum sed lacus integer. Porttitor purus nunc sit
            nunc. Vel enim donec neque purus felis tortor felis sed amet. Quis
            urna faucibus faucibus imperdiet. Ornare egestas felis lacus in
            vitae pretium dolor. Nulla dui et lacus aenean elit. Et elit amet
            justo fringilla.
          </p>
          <div className="relative bg-accentRed py-4 rounded-md w-3/4 -ml-[25%] -mb-[20%]">
            <FaQuoteLeft className="text-[120px] text-primary/15 absolute left-[10%]" />
            <div className="flex items-center">
              <div className="w-1/5"></div>
              <div className="w-4/5">
                <h3 className="pb-2 text-primary text-[27px] font-semibold">
                  “One who pays Zakat,
                  <br /> Allah will make their wealth increase”
                </h3>
                <h5 className="text-primary text-lg font-semibold">
                  -Shahih Bukhari
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tomorrow;
