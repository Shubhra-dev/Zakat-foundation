import Button from "./Button";
function CareSection() {
  return (
    <div className="mt-8 py-10 bg-secondary/10 text-center">
      <h3 className="text-accentRed text-2xl font-semibold pb-8">
        Let's care for each other
      </h3>
      <h1 className="text-secondary text-[55px] font-bold font-pally pb-6">
        Lorem ipsum dolor sit amet consectetur.
      </h1>
      <p className="text-secondary text-sm font-normal w-5/12 m-auto pb-8">
        Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla
        magna ut. Viverra ultricies sit quis facilisi id id tristique tempus.
        Sit elementum sed lacus integer. Porttitor purus nunc sit nunc. Vel enim
        donec neque purus felis tortor felis sed amet.
      </p>
      <Button bg={"bg-accentRed mb-4"} padding={"py-3 px-5"}>
        +880 XXXXXXXX
      </Button>
    </div>
  );
}

export default CareSection;
