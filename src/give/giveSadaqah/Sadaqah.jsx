import GiveLayout from "../GiveLayout";
import DonateSadaqah from "./DonateSadaqah";
import Empower from "./Empower";
import SadaqahCards from "./SadaqahCards";
import SadaqahHero from "./SadaqahHero";

function Sadaqah() {
  return (
    <GiveLayout tab={2}>
      <SadaqahHero />
      <Empower />
      <SadaqahCards />
      <DonateSadaqah />
    </GiveLayout>
  );
}

export default Sadaqah;
