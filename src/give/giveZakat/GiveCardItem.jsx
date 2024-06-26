import { FiEdit } from "react-icons/fi";
function GIveCardItem({ text }) {
  return (
    <div className="bg-gradient-to-tr from-primary from-65%  w-11/12 sm:w-5/6 m-auto rounded-xl via-accentCyan/50 via-70% to-primary shadow-[5px_2px_40px_10px_rgba(0,0,0,0.15)] mb-[2%]">
      <div className="w-full h-full backdrop-blur-2xl p-[2%] rounded-xl flex items-center">
        <FiEdit className="m-auto text-2xl sm:text-3xl text-accentRed" />
        <h3 className="w-[90%] text-secondary fontbold sm:font-normal text-small sm:text-s2">
          {text}
        </h3>
      </div>
    </div>
  );
}

export default GIveCardItem;
