import { FaArrowUp } from "react-icons/fa";

function StoryItem({ img }) {
  return (
    <div className="w-[45%] sm:w-[30%] relative">
      <img
        src={img}
        alt="man"
        className="w-full rounded-md -z-10 h-[300px] sm:h-[350px] laptop:h-[450px]"
      />
      <div className="text-center bg-primary py-2 sm:py-4 px-2 shadow-md border border-gray-200 rounded-md w-5/6 m-auto -mt-10 z-10 relative overflow-hidden">
        <h4 className="text-s2 sm:text-h4 text-secondary font-bold font-pally">
          Ryan Passaquindici
        </h4>
        <p className="pt-2 text-accentRed text-small sm:text-light font-light capitalize">
          lorem ipsum
        </p>
        <div className="bg-accentRed py-10 px-6 w-max absolute -right-3 -bottom-10 rotate-45"></div>
        <FaArrowUp className="absolute right-1 rotate-45 text-primary bottom-2" />
      </div>
    </div>
  );
}

export default StoryItem;
