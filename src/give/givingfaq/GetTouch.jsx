import RoundedButton from "../../ui/RoundedButton";

function GetTouch({ my }) {
  return (
    <div
      className={`bg-accentPurple py-[5%] mx-[4%] ${
        my ? my : "my-[4%]"
      } rounded-xl -z-20 relative overflow-hidden`}
    >
      <div
        className={`h-[350px] w-[350px] absolute -z-10 -bottom-14 -left-14 bg-gradient-to-t from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <div
        className={`h-[350px] w-[350px] absolute -z-10 -top-14 -right-14 bg-gradient-to-b from-accentPurple to-primary/20 rounded-full`}
      ></div>
      <h2 className="w-3/5 m-auto text-center text-primary text-[50px] font-bold font-pally py-6">
        Do you still have questions? Get in touch with our team
      </h2>
      <div className="w-max m-auto">
        <RoundedButton bg={"bg-primary"} textColor={"text-accentPurple"}>
          Get in Touch
        </RoundedButton>
      </div>
    </div>
  );
}

export default GetTouch;
