const HeroSection = () => {
  return (
    <section className="relative bg-white text-center py-[250px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/monopoly-board.jpg')" }}
      >
        <div className="bg-gray-900/80 h-full w-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 drop-shadow-lg">
          Own the Board, Rule the Crypto World!
        </h1>
        <p className="text-lg md:text-xl text-gray-50 mt-4 max-w-3xl mx-auto">
          The game where your holdings decide your empire. Build wealth,
          dominate the board, and flex your assets.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <a
            href="https://pancakeswap.finance"
            target="_blank"
            className="bg-green-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Buy Now
          </a>
          <a
            href="#leaderboard"
            className="bg-red-600 text-white px-8 py-3 rounded-xl shadow-lg text-lg font-semibold hover:bg-red-700 transition"
          >
            Explore Leaderboard
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
