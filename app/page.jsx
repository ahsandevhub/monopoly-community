import About from "./About";
import FaqPage from "./FaqPage";
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
      <FaqPage />
    </>
  );
};

export default HomePage;
