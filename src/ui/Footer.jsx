function Footer() {
  return (
    <>
      <div className="w-5/6 m-auto flex items-start text-secondary/80 pt-[5%]">
        <div className="w-1/4">
          <h1 className="text-secondary text-xl font-semibold leading-relaxed">
            About
          </h1>
          <p className="pt-2 w-3/4 text-sm font-light">
            Lorem ipsum dolor sit amet consectetur. Est gravida vitae leo nulla
            magna ut. Viverra ultricies sit quis facilisi id id tristique
            tempus. Sit elementum sed lacus integer.
          </p>
          <h1 className="text-secondary text-xl font-semibold leading-relaxed pt-4">
            Social Links
          </h1>
          <div className="w-1/2 flex justify-between items-center">
            <div className="rounded-sm w-10 h-10 bg-accentRed"></div>
            <div className="rounded-sm w-10 h-10 bg-accentRed"></div>
            <div className="rounded-sm w-10 h-10 bg-accentRed"></div>
            <div className="rounded-sm w-10 h-10 bg-accentRed"></div>
          </div>
        </div>
        <div className="w-1/4">
          <h1 className="text-secondary text-xl font-semibold leading-relaxed">
            Quick Links
          </h1>
          <ul className="pt-2 pl-4 text-sm list-disc">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h1 className="text-secondary text-xl font-semibold leading-relaxed">
            Support Links
          </h1>
          <ul className="pt-2 pl-4 text-sm list-disc">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
        <div className="w-1/4">
          <h1 className="text-secondary text-xl font-semibold leading-relaxed">
            Locations
          </h1>
          <ul className="pt-2 pl-4 text-sm list-disc">
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum</li>
          </ul>
        </div>
      </div>
      <div className="w-5/6 m-auto py-6 text-center text-sm font-light">
        <h2>Copyright © 2024. All rights reserved.</h2>
      </div>
    </>
  );
}

export default Footer;
