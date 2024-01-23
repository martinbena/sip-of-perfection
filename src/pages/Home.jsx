import { usePageTitle } from "../hooks/usePageTitle";
import CafeExperience from "../ui/CafeExperience";
import FeatureRow from "../ui/FeatureRow";
import Hero from "../ui/Hero";
import OpeningHours from "../ui/OpeningHours";
import Specialities from "../ui/Specialities";
import Story from "../ui/Story";

function Home() {
  usePageTitle("About us");
  return (
    <>
      <Hero />
      <Story />
      <FeatureRow />
      <Specialities />
      <OpeningHours />
      <CafeExperience />
    </>
  );
}

export default Home;
