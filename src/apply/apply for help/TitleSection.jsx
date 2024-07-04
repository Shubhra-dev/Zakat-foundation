import RoundedButton from "../../ui/RoundedButton";

function TitleSection({ title, buttonText, children }) {
  return (
    <div className="text-center py-[3%] bg-primary px-[3%]">
      <h2 className="w-11/12 laptop:w-4/5 m-auto text-secondary font-bold text-h3 sm:text-s1 laptop:text-title font-pally pb-4">
        {title}
      </h2>
      {children}
      <RoundedButton bg={"bg-accentPurple capitalize mt-6"}>
        {buttonText}
      </RoundedButton>
    </div>
  );
}

export default TitleSection;
