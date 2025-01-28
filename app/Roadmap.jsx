"use client";

const Roadmap = () => {
  const phases = [
    {
      title: "Phase 1: Building the Foundation",
      items: [
        {
          emoji: "🎩",
          name: "Launch & Community Growth",
          description:
            "Establish the $MONO brand, grow an active community, and partner with influencers to increase awareness.",
        },
        {
          emoji: "🚂",
          name: "Game Mechanics Development",
          description:
            "Design the PVP Monopoly-inspired wagering system and implement staking solutions for rewarding holders.",
        },
      ],
    },
    {
      title: "Phase 2: Expanding the Ecosystem",
      items: [
        {
          emoji: "🖼",
          name: "Exclusive NFT Drop",
          description:
            "Release limited-edition Monopoly NFTs for the top 22 holders, offering in-game perks and collectible art.",
        },
        {
          emoji: "🎶",
          name: "Community Anthem",
          description:
            "Collaborate with artists to create an anthem for $MONO marketing and events.",
        },
      ],
    },
    {
      title: "Phase 3: PVP Wagering Game Launch",
      items: [
        {
          emoji: "🎮",
          name: "Beta Test the PVP Monopoly Wagering Game",
          description:
            "Invite community members to test the game and refine it based on feedback.",
        },
        {
          emoji: "🎲",
          name: "Official Game Release",
          description:
            "Launch the full Monopoly-inspired wagering platform for players to bet and compete.",
        },
      ],
    },
    {
      title: "Phase 4: Staking & Ecosystem Growth",
      items: [
        {
          emoji: "💰",
          name: "Staking Platform Rollout",
          description:
            "Introduce staking rewards like NFTs, in-game bonuses, or additional tokens for $MONO holders.",
        },
        {
          emoji: "🚀",
          name: "Scaling the Ecosystem",
          description:
            "Expand $MONO through partnerships, additional NFTs, and gameplay rewards.",
        },
      ],
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-16 bg-gradient-to-b from-purple-900 via-black to-purple-900 text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Roadmap</h2>
        <div className="space-y-10">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gradient">
                {phase.title}
              </h3>
              <div className="space-y-6">
                {phase.items.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="text-3xl">{item.emoji}</div>
                    <div>
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <p className="text-slate-300">{item.description}</p>
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
