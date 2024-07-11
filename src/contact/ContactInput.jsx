function ContactInput({
  id,
  placeholder,
  w,
  type,
  value,
  setData,
  rounded,
  required,
}) {
  return (
    <input
      type={type ? type : "text"}
      name={id}
      id={id}
      required={required ? required : null}
      value={value}
      onChange={setData}
      placeholder={placeholder}
      className={`p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 ${
        w ? w : "w-full"
      } ${rounded ? "rounded-md" : ""}`}
    />
  );
}

export default ContactInput;
