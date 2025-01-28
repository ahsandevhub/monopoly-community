import AboutImg from "@/public/art1.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="relative flex items-center justify-center sm:py-[100px] py-20 bg-gradient-to-br from-[#cce3c7] to-sky-500">
      <div id="about" className="absolute -top-10"></div>
      <div className="container mx-auto grid items-center sm:grid-cols-2 gap-10 px-4">
        {/* Left Side - Image */}
        <div className="relative">
          {/* <div className="absolute scale-110 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-full -rotate-12 bg-gray-500"></div> */}
          <Image
            src={AboutImg}
            alt="Monopoly game"
            className="md:w-2/3 w-full mx-auto rounded-lg shadow-lg border-4"
          />
        </div>

        {/* Right Side - About Section */}
        <div className="text-center bg-gray-50/30 md:p-8 p-4 rounded-md border-2 border-[#f70400] md:text-left">
          <h1 className="text-3xl font-bold text-[#f70400] mb-4">
            What is Monopoly?
          </h1>
          <p className="text-lg text-gray-800 mb-4">
            Monopoly isn’t just a game; it’s a lesson in how wealth is won,
            lost, and manipulated. The rich grow richer while everyone else
            keeps landing on their properties. Sound familiar?
          </p>
          <p className="text-lg text-gray-800 mb-4">
            Monopoly takes this timeless truth and turns it into a meme-powered
            crypto revolution. It’s a satirical nod to the game of life, where
            strategy, chance, and a little bit of luck decide who wins. Whether
            you’re stacking hotels or just trying to dodge bankruptcy, this
            project is your chance to play big, laugh louder, and flip the
            script on the system.
          </p>
          <p className="text-lg text-gray-800">
            Ready to roll the dice? The game is on!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
