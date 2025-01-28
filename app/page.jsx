import About from "./About";
import FAQ from "./Faq";
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
      <FAQ />
    </>
  );
};

export default HomePage;
