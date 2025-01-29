import AboutImg from "@/public/art1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="relative flex items-center justify-center py-20 sm:py-[100px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/C1VcU-dQ7kS._SX1920_QL65_FMwebp_.webp')",
      }} // Replace with your image
    >
      <div id="about" className="absolute -top-10"></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative container mx-auto grid items-center sm:grid-cols-2 gap-10 px-6">
        {/* Left Side - Image */}
        <div className="relative">
          <Image
            src={AboutImg}
            alt="Monopoly game"
            className="md:w-2/3 w-full mx-auto rounded-lg shadow-xl border-4 border-[#f70400]"
          />
        </div>

        {/* Right Side - About Section */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/30 md:p-8 p-4 rounded-lg shadow-lg text-center md:text-left">
          <h1 className="text-3xl font-bold text-yellow-500 mb-4">
            What is Monopoly?
          </h1>
          <p className="text-lg text-white mb-4">
            Monopoly isn’t just a game; it’s a lesson in how wealth is won,
            lost, and manipulated. The rich grow richer while everyone else
            keeps landing on their properties. Sound familiar?
          </p>
          <p className="text-lg text-white mb-4">
            Monopoly takes this timeless truth and turns it into a meme-powered
            crypto revolution. It’s a satirical nod to the game of life, where
            strategy, chance, and a little bit of luck decide who wins.
          </p>
          <p className="text-lg text-white">
            Ready to roll the dice? The game is on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
