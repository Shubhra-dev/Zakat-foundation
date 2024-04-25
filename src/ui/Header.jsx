import Button from "./Button";
import logo from "../assets/logo.png";
function Header() {
  return (
    <div className="w-full h-[110px] bg-gray-900 fixed top-0 left-0">
      <div className="w-5/6 h-full m-auto flex justify-between items-center text-primary">
        <div className="w-2/5">
          <img src={logo} alt="logo" className="h-[80px]" />
        </div>
        <div className="w-3/5 flex justify-between items-center text-primary lext-lg font-semibold uppercase leading-snug">
          <h2>Menu_1</h2>
          <h2>Menu_2</h2>
          <h2>Menu_3</h2>
          <h2>Menu_4</h2>
          <Button bg={"bg-accentCyan"}>give zakat</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
