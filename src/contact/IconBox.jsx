import P from "../ui/P";

function IconBox({ children, text }) {
  return (
    <div className="flex items-center gap-4 pb-4">
      <div className="w-[15%]">{children}</div>
      <P p="pb-0" textColor={"text-primary w-[85%]"}>
        {text}
      </P>
    </div>
  );
}

export default IconBox;
