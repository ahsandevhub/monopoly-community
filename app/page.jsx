import About from "./About";
import FaqPage from "./FaqPage";
import HeroSection from "./HeroSection";
import Roadmap from "./Roadmap";
// import TokenStats from "./TokenStats";
import TopHolders from "./TopHolders";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      {/* <TokenStats /> */}
      <Roadmap />
      <TopHolders />
      <FaqPage />
    </>
  );
};

export default HomePage;
