function ContactInput({ id, placeholder, w, type }) {
  return (
    <input
      type={type ? type : "text"}
      name={id}
      id={id}
      placeholder={placeholder}
      className={`p-2 font-normal text-s3 tab:text-paragraph border-b border-b-gray-300 ${
        w ? w : "w-full"
      }`}
    />
  );
}

export default ContactInput;
