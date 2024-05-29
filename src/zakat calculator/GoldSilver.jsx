import { useState } from "react";
import H2 from "../ui/H2";
import P from "../ui/P";
import Button from "../ui/Button";
import ZakatInput from "./ZakatInput";
function GoldSilver() {
  const [grams, setGrams] = useState(false);
  return (
    <div className="w-full laptop:w-11/12 m-auto mt-4 py-2 px-4 laptop:px-0 bg-slate-100 rounded-xl">
      <H2 textColor={"text-secondary pb-2 text-center"} font={"font-pally"}>
        My Gold & Silver
      </H2>
      <P add={"text-center"} p={"px-4 pb-2"}>
        If you’re not sure how much your gold and silver is worth you can enter
        the weight in grams. One vori is equal to 11.7 grams.
      </P>
      {!grams && (
        <>
          <ZakatInput label={"Gold"} name={"gold"} />
          <ZakatInput label={"Silver"} name={"silver"} />
        </>
      )}
      {grams && (
        <>
          <ZakatInput
            label={"Gold"}
            name={"gold"}
            placeholder={"Enter in grams"}
            grams={true}
          />
          <ZakatInput
            label={"Silver"}
            name={"silver"}
            placeholder={"Enter in grams"}
            grams={true}
          />
        </>
      )}
      <div className="py-2 w-max m-auto">
        <Button onClick={() => setGrams(!grams)} bg={"bg-accentCyan"}>
          {grams ? "Change to amount" : "Change to grams"}
        </Button>
      </div>
    </div>
  );
}

export default GoldSilver;
