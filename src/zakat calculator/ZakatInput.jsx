import P from "../ui/P";
function ZakatInput({ label, name, placeholder, grams, wd, value, setData }) {
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
          {grams ? "g" : "৳"}
        </P>
        <input
          type="number"
          name={name}
          id={name}
          value={value == 0 ? "" : value}
          onChange={(e) => setData(Number(e.target.value))}
          placeholder={placeholder ? placeholder : "Enter Amount"}
          className="w-[80%] h-full p-2 rounded-r-xl text-s3 sm:text-paragraph"
        />
      </div>
    </div>
  );
}

export default ZakatInput;
