import Button from "./Button";
function CareSection() {
  return (
    <div className="mt-0 sm:mt-8 py-4 sm:py-10 bg-secondary/10 text-center px-4 sm:px-0">
      <h3 className="text-accentRed text-light sm:text-s2 tab:text-h4 font-semibold pb-2 tab:pb-8">
        Let&apos;s care for each other
      </h3>
      <h1 className="text-secondary text-h3 sm:text-s1 tab:text-title font-bold font-pally pb-2 sm:pb-6">
        One Donation At A Time
      </h1>
      <p className="text-secondary text-s3 sm:text-s2 font-normal w-full tab:w-5/12 m-auto pb-8">
        Your Zakat helps Muslims who are struggling to pay bills, put food on
        their table and provide for their families. Our Zakat is needed now more
        than ever.
      </p>
      <Button bg={"bg-accentRed mb-2 sm:mb-4"} padding={"py-3 px-5"}>
        +880 123456789
      </Button>
    </div>
  );
}

export default CareSection;
