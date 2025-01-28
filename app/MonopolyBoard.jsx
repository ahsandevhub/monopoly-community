import MonopolyBoardImg from "@/public/monopoly board2.jpg";
import Image from "next/image";

const MonopolyBoard = () => {
  return (
    <div className="relative w-full">
      {/* Monopoly Board */}
      <Image
        src={MonopolyBoardImg}
        alt="monopoly board"
        className="sm:border-4 w-full saturate-150 contrast-100 brightness-75 border-slate-600"
      />
      {/* Numbers placed around the board */}
      {[
        { num: 1, top: "5%", left: "5%" }, // Top-left corner
        { num: 2, top: "10%", left: "5%" }, // Move down along the left edge
        { num: 3, top: "20%", left: "5%" },
        { num: 4, top: "30%", left: "5%" },
        { num: 5, top: "40%", left: "5%" },
        { num: 6, top: "50%", left: "5%" },
        { num: 7, top: "60%", left: "5%" },
        { num: 8, top: "70%", left: "5%" },
        { num: 9, top: "85%", left: "10%" }, // Bottom-left corner, move right along bottom
        { num: 10, top: "85%", left: "25%" },
        { num: 11, top: "85%", left: "40%" },
        { num: 12, top: "85%", left: "55%" },
        { num: 13, top: "85%", left: "70%" },
        { num: 14, top: "85%", left: "85%" }, // Bottom-right corner, move up along right edge
        { num: 15, top: "70%", left: "90%" },
        { num: 16, top: "50%", left: "90%" },
        { num: 17, top: "30%", left: "90%" },
        { num: 18, top: "10%", left: "90%" }, // Top-right corner, move left along top edge
        { num: 19, top: "5%", left: "70%" },
        { num: 20, top: "5%", left: "50%" },
        { num: 21, top: "5%", left: "30%" },
        { num: 22, top: "5%", left: "10%" }, // Back to starting point
      ].map((item) => (
        <span
          key={item.num}
          className="absolute text-white font-bold bg-red-500/80 p-1 rounded-full flex justify-center items-center"
          style={{
            top: item.top,
            left: item.left,
            width: "25px",
            height: "25px",
          }}
        >
          {item.num}
        </span>
      ))}
    </div>
  );
};

export default MonopolyBoard;
