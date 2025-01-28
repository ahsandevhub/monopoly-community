import About from "./About";
import Faq from "./Faq";
import HeroSection from "./HeroSection";
// import TokenStats from "./TokenStats";
import TopHolders from "./TopHolders";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      {/* <TokenStats /> */}
      <TopHolders />
      <Faq />
    </>
  );
};

export default HomePage;
