"use client";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1 - Core Development",
      items: [
        {
          emoji: "🏠",
          name: "Smart Contract for Property Ownership & Trading",
          description:
            "Develop smart contracts to enable NFT-based property ownership and trading on Solana.",
        },
        {
          emoji: "🎲",
          name: "NFT Minting with In-Game Attributes",
          description:
            "Mint unique NFT properties with attributes affecting gameplay dynamics.",
        },
        {
          emoji: "🔀",
          name: "Dice Roll Randomness Integration",
          description:
            "Implement Verifiable Random Function (VRF) for secure, fair dice rolls.",
        },
      ],
    },
    {
      title: "Phase 2 - Marketplace & Gameplay",
      items: [
        {
          emoji: "🛒",
          name: "In-Game Marketplace for NFT Trading",
          description:
            "Build a decentralized marketplace for players to trade properties and assets.",
        },
        {
          emoji: "💰",
          name: "PvP Mechanics & Rent Collection Automation",
          description:
            "Automate rent collection, property upgrades, and wagering mechanics through smart contracts.",
        },
        {
          emoji: "🔗",
          name: "Wallet Connection for Seamless Gameplay",
          description:
            "Integrate Solana wallets like Phantom and Solflare for secure transactions.",
        },
      ],
    },
    {
      title: "Phase 3 - Multiplayer & DAO Integration",
      items: [
        {
          emoji: "👥",
          name: "Multiplayer Lobbies & Matchmaking",
          description:
            "Enable real-time multiplayer gaming with automated matchmaking.",
        },
        {
          emoji: "🏆",
          name: "Tournaments & Leaderboard System",
          description:
            "Introduce competitive tournaments with prize pools for top players.",
        },
        {
          emoji: "⚖️",
          name: "Governance & Staking Features",
          description:
            "Allow NFT holders to vote on ecosystem updates and earn passive income through staking.",
        },
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-16 bg-cover bg-center text-white relative"
      style={{
        backgroundImage: "url('/artcore-studios-monopolyscreens04.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black backdrop-blur-sm bg-opacity-60"></div>
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center md:mb-12 mb-8">
          Development Roadmap
        </h2>
        <div className="space-y-10">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-opacity-80 rounded-2xl shadow-lg px-3 py-4 sm:p-5 md:p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl text-center md:text-start font-semibold mb-4 text-yellow-400">
                {phase.title}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {phase.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-3 sm:space-x-4"
                  >
                    <div className="text-2xl sm:text-3xl">{item.emoji}</div>
                    <div>
                      <h4 className="text-base sm:text-lg md:text-xl font-semibold text-white">
                        {item.name}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
