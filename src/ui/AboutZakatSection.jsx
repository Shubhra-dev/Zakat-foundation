import Button from "./Button";
import about from "../assets/about.png";
function AboutZakatSection() {
  return (
    <div className="py-12 w-5/6 m-auto flex justify-between items-center">
      <div className="w-3/5">
        <h2 className="text-2xl text-accentCyan font font-semibold">
          About Zakat
        </h2>
        <h1 className="text-secondary text-[55px] font-bold font-pally w-3/4 leading-[70px] py-4">
          Lorem ipsum dolor sit amet consectetur. Mauris et eget amet risus.
        </h1>
        <p className="text-secondary text-sm font-normal w-3/4 pb-4">
          Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla
          magna ut. Viverra ultricies sit quis facilisi id id tristique tempus.
          Sit elementum sed lacus integer. Porttitor purus nunc sit nunc. Vel
          enim donec neque purus felis tortor felis sed amet. Quis urna faucibus
          faucibus imperdiet. Ornare egestas felis lacus in vitae pretium dolor.
          Nulla dui et lacus aenean elit. Et elit amet justo fringilla.
        </p>
        <Button
          bg={"bg-primary shadow-xl"}
          textColor={"text-accentCyan border border-gray-200"}
        >
          give zakat
        </Button>
      </div>
      <div className="w-2/5">
        <img src={about} alt="help" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default AboutZakatSection;
