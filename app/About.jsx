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
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/50 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col sm:flex-row items-stretch gap-10 px-6">
        {/* Left Side - Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-full max-w-[500px] h-full">
            <Image
              src={AboutImg}
              alt="Monopoly game"
              className="w-full h-full object-cover rounded-xl shadow-2xl border-4 border-[#f70400] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right Side - About Section */}
        <div className="flex-1 bg-white/10 backdrop-blur-lg border border-white/20 md:p-10 p-6 rounded-xl shadow-2xl text-center md:text-left flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-6">
              What is <span className="text-orange-500">Monopoly</span>?
            </h1>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Monopoly isn’t just a game; it’s a lesson in how wealth is won,
              lost, and manipulated. The rich grow richer while everyone else
              keeps landing on their properties. Sound familiar?
            </p>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Monopoly takes this timeless truth and turns it into a
              meme-powered crypto revolution. It’s a satirical nod to the game
              of life, where strategy, chance, and a little bit of luck decide
              who wins.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Ready to roll the dice? The game is on!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
