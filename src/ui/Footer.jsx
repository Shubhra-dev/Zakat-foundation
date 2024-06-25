import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full text-primary bg-gray-900 py-[2%] z-50">
        <div className="w-11/12 flex flex-col gap-2 sm:gap-0 sm:flex-row items-center justify-center sm:items-start m-auto pb-4 border-b border-b-primary">
          <div className="w-full sm:w-1/4">
            <img
              src={logo}
              alt="logo"
              className="h-[65px] cursor-pointer"
              onClick={() => navigate("/")}
            />
            <p className="py-2 w-3/4 text-sm font-light">
              Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo
              nulla magna ut. Viverra ultricies sit quis facilisi id id
              tristique tempus. Sit elementum sed lacus integer.
            </p>
            <div className="flex gap-2 items-center pt-2">
              <IoLocationOutline className="text-xl text-accentRed" />
              <h5 className="text-sm font-light">Banani, Dhaka, Bangladesh</h5>
            </div>
            <div className="flex gap-2 items-center pt-2">
              <FiPhoneCall className="text-xl text-accentRed" />
              <h5 className="text-sm font-light">+880 1XXX XXXXXX</h5>
            </div>
          </div>
          <div className="hidden sm:block w-1/4">
            <h1 className="text-primary text-xl font-semibold leading-relaxed">
              Quick Links
            </h1>
            {[
              "zakat calculator",
              "today's nisab",
              "give zakat",
              "zakat guides",
              "impact stories",
              "purpose of zakat",
            ].map((item) => (
              <h5
                className="text-sm cursor-pointer font-normal pt-2 capitalize"
                key={item}
              >
                {item}
              </h5>
            ))}
          </div>
          <div className="hidden sm:block w-1/4">
            <h1 className="text-primary text-xl font-semibold leading-relaxed">
              Support Links
            </h1>
            {[
              "terms & conditions",
              "privacy policy",
              "cookie policy",
              "get in touch",
            ].map((item) => (
              <h5
                className="text-sm cursor-pointer font-normal pt-2 capitalize"
                key={item}
              >
                {item}
              </h5>
            ))}
          </div>
          <div className="sm:hidden flex justify-between w-full">
            <div className="w-full sm:w-1/4">
              <h1 className="text-primary text-xl font-semibold leading-relaxed">
                Quick Links
              </h1>
              {[
                "zakat calculator",
                "today's nisab",
                "give zakat",
                "zakat guides",
                "impact stories",
                "purpose of zakat",
              ].map((item) => (
                <h5
                  className="text-sm cursor-pointer font-normal pt-2 capitalize"
                  key={item}
                >
                  {item}
                </h5>
              ))}
            </div>
            <div className="w-full sm:w-1/4">
              <h1 className="text-primary text-xl font-semibold leading-relaxed">
                Support Links
              </h1>
              {[
                "terms & conditions",
                "privacy policy",
                "cookie policy",
                "get in touch",
              ].map((item) => (
                <h5
                  className="text-sm cursor-pointer font-normal pt-2 capitalize"
                  key={item}
                >
                  {item}
                </h5>
              ))}
            </div>
          </div>
          <div className="w-full sm:w-1/4">
            <h1 className="text-primary text-xl font-semibold leading-relaxed">
              Sign up to the ZF BD newsletter
            </h1>
            <div className="w-full flex items-center gap-2 pt-2">
              <input
                type="email"
                name="newsteller"
                id="newsteller"
                placeholder="Enter your email here"
                className="w-[70%] p-2 text-sm font-light rounded-md"
              />
              <button className="rounded-md w-[30%] text-primary bg-gradient-to-r from-accentRed to-accentPurple text-sm font-light py-2">
                Sign Up
              </button>
            </div>
            <p className="pt-2 text-sm font-light">
              By signing up to our newsletter you agree that NZF will store your
              data and use it to send you emails around latest news and events.
              Read more about how we store your data
            </p>
            <div className="w-full flex items-center justify-between pt-2">
              <h2 className="text-xl font-semibold">Follow Us On</h2>
              <div className="flex items-center justify-end gap-2">
                <FaYoutube className="py2 px-1 rounded-md bg-accentRed text-4xl cursor-pointer" />
                <FaFacebook className="py2 px-1 rounded-md bg-accentRed text-4xl cursor-pointer" />
                <FaInstagram className="py2 px-1 rounded-md bg-accentRed text-4xl cursor-pointer" />
                <SlSocialTwitter className="py2 px-1 rounded-md bg-accentRed text-4xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-5/6 m-auto pt-2 text-center text-sm font-light">
          <h2>Copyright © 2024. All rights reserved.</h2>
        </div>
      </div>
    </>
  );
}
export default Footer;
