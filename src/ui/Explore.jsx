import Button from "./Button";

function Explore() {
  return (
    <div className="w-5/6 m-auto flex gap-4 items-center -mt-12 pb-12">
      <div className="w-4/5 flex gap-0 items-center">
        <div className="py-4 px-6 shadow-xl rounded-2xl bg-primary">
          <h2 className="text-secondary font-semibold text-2xl pb-2">
            Lorem ipsum
          </h2>
          <p className="pb-2 text-sm text-secondary font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate varius egestas
            gravida non in phasellus. Enim integer nam at maecenas diam
            elementum at.
          </p>
          <button className="capitalize text-accentRed text-lg font-semibold cursor-pointer py-2">
            read more
          </button>
        </div>
        <div className="py-4 px-6 shadow-xl rounded-2xl -ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-2xl pb-2">
            Lorem ipsum
          </h2>
          <p className="pb-2 text-sm text-secondary font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate varius egestas
            gravida non in phasellus. Enim integer nam at maecenas diam
            elementum at.
          </p>
          <button className="capitalize text-accentRed text-lg font-semibold cursor-pointer py-2">
            read more
          </button>
        </div>
        <div className="py-4 px-6 shadow-xl rounded-2xl -ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-2xl pb-2">
            Lorem ipsum
          </h2>
          <p className="pb-2 text-sm text-secondary font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate varius egestas
            gravida non in phasellus. Enim integer nam at maecenas diam
            elementum at.
          </p>
          <button className="capitalize text-accentRed text-lg font-semibold cursor-pointer py-2">
            read more
          </button>
        </div>
        <div className="py-4 px-6 shadow-xl rounded-2xl -ml-2 bg-primary">
          <h2 className="text-secondary font-semibold text-2xl pb-2">
            Lorem ipsum
          </h2>
          <p className="pb-2 text-sm text-secondary font-normal">
            Lorem ipsum dolor sit amet consectetur. Vulputate varius egestas
            gravida non in phasellus. Enim integer nam at maecenas diam
            elementum at.
          </p>
          <button className="capitalize text-accentRed text-lg font-semibold cursor-pointer py-2">
            read more
          </button>
        </div>
      </div>
      <div className="w-1/5 py-4 px-6 bg-accentRed rounded-xl shadow-xl text-primary">
        <h2 className="font-semibold text-2xl pb-2">Explore More</h2>
        <p className="pb-2 text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur. Vulputate varius egestas
          gravida non in phasellus. Enim integer nam at maecenas diam elementum
          at.
        </p>
        <Button textColor={"text-accentRed"}>read more</Button>
      </div>
    </div>
  );
}

export default Explore;
