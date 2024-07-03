import RoundedButton from "../../ui/RoundedButton";

function GetTouch({ my, button1, button2 }) {
  return (
    <div
      className={`bg-accentPurple py-[5%] mx-[4%] ${
        my ? my : "my-[4%]"
      } rounded-xl relative overflow-hidden`}
    >
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -bottom-14 -left-14 bg-gradient-to-t from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[150px] laptop:h-[350px] w-[150px] laptop:w-[350px] absolute -top-14 -right-14 bg-gradient-to-b from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <h2 className="w-5/6 laptop:w-3/5 m-auto text-center text-primary text-h3 sm:text-s1 laptop:text-title font-bold font-pally py-6 relative">
        Do you still have questions? Get in touch with our team
      </h2>
      <div className="w-max m-auto flex items-center gap-6 relative">
        <RoundedButton bg={"bg-primary"} textColor={"text-accentPurple"}>
          {`${button1 ? button1 : "Get in Touch"}`}
        </RoundedButton>
        {button2 && (
          <RoundedButton bg={"bg-primary"} textColor={"text-accentPurple"}>
            {button2}
          </RoundedButton>
        )}
      </div>
    </div>
  );
}

export default GetTouch;
