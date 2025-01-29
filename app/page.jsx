import About from "./About";
import FaqPage from "./FaqPage";
import HeroSection from "./HeroSection";
import HowToBuy from "./HowToBuy";
import Roadmap from "./Roadmap";
import Tokenmics from "./Tokenmics";
// import TokenStats from "./TokenStats";
import TopHolders from "./TopHolders";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Tokenmics />
      <HowToBuy />
      <TopHolders />
      {/* <TokenStats /> */}
      <Roadmap />
      <FaqPage />
    </>
  );
};

export default HomePage;
