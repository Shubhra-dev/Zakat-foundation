import { useState } from "react";
import P from "../ui/P";
function ZakatInput({ label, name, placeholder, vori, wd, value, setData }) {
  const [input, setInput] = useState(value > 0 ? value : "");
  const handleChange = (e) => {
    const value = e.target.value;
    const isValidNumber = /^\d*\.?\d*$/.test(value);
    if (isValidNumber) {
      if (!value.endsWith(".") && value !== "") {
        setData(value);
      }
      if (value === "") {
        setData(0);
      }
      setInput(value);
    } else alert(`Input should be a positive number`);
  };
  return (
    <div className={`${wd ? wd : "w-full sm:w-3/4"} m-auto pb-2`}>
      {label && (
        <P p={"p-0"} add={"font-semibold"}>
          {label}:
        </P>
      )}
      <div className="flex items-center bg-white w-full rounded-xl border border-gray-300">
        <P
          add={
            "w-[20%] h-full rounded-l-xl bg-gray-100 border-r border-r-gray-300 text-center"
          }
          p={"py-2"}
        >
          {vori ? "Vori" : "৳"}
        </P>
        <input
          type="text"
          name={name}
          id={name}
          value={input}
          onChange={handleChange}
          placeholder={placeholder ? placeholder : "Enter Amount"}
          className="w-[80%] h-full p-2 rounded-r-xl text-s3 sm:text-paragraph"
        />
      </div>
    </div>
  );
}

export default ZakatInput;
