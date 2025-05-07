import { ChevronDown, Funnel, GitFork, Lock, Play, Star } from "lucide-react";

function MainContent() {
  return (
    <div className="flex justify-center items-center text-white min-h-screen">
      <div className="bg-[#333333] w-96 p-5 rounded-xl h-3/4">
        <div className="border-b border-[#72706c] pb-5">
          <div className="bg-white inline-block p-4 rounded-md">
            <Star fill="#f2b04f" stroke="#f2b04f" size={64} />
          </div>

          <h2 className="font-medium text-4xl mt-4 mb-4">Favorite</h2>

          <div className="flex gap-2 font-medium text-base mb-5 text-white/90">
            <p>Suman</p> &#xB7; <p>19 questions</p> &#xB7;
            <p className="flex gap-1 items-center">
              <Lock size={16} />
              Private <ChevronDown size={16} />
            </p>
          </div>

          <div className="flex gap-5">
            <button className="bg-[#f5f5f5] text-black p-2 flex gap-1 rounded-2xl font-semibold items-center hover:bg-gray-200 transition">
              <Play size={16} />
              <span>Practice</span>
            </button>

            <button className="bg-[#72706c] p-2 rounded-full inline-block hover:opacity-90 transition">
              <GitFork />
            </button>
          </div>
        </div>

        <div className="mt-6 text-white text-center">
          <h2>Progress</h2>
          <div></div>
        </div>
      </div>

      <div className="">
        <div>
          <button className="flex items-center gap-2 bg-white px-5 py-1 rounded-xl cursor-pointer">
            <Funnel fill="#1a1a1a" stroke="none" />
            <span className="font-medium text-lg text-[#1a1a1a]">Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
