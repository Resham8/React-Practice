import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const  Progress = ({
  acceptance,
  submissions,
  easySolved,
  easyTotal,
  mediumSolved,
  mediumTotal,
  hardSolved,
  hardTotal,
}) => {
  return (
    <div className="bg-[#1e1e1e] p-4 rounded-xl w-full max-w-md flex gap-4 text-white shadow-md">
      {/* Circular Progress */}
      <div className="w-40 h-40">
        <CircularProgressbarWithChildren
          value={acceptance}
          styles={buildStyles({
            trailColor: "#3a3a3a",
            pathColor: "#00d1b2",
            strokeLinecap: "round",
          })}
        >
          <div className="text-center">
            <div className="text-2xl font-bold">{acceptance.toFixed(2)}%</div>
            <div className="text-sm">Acceptance</div>
            <div className="text-gray-400 text-xs mt-1">
              {submissions} submission
            </div>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      {/* Right side stats */}
      <div className="flex flex-col justify-center gap-4 text-sm">
        <div className="bg-[#2a2a2a] px-3 py-2 rounded-md flex justify-between">
          <span className="text-cyan-400 font-semibold">Easy</span>
          <span>{easySolved}/{easyTotal}</span>
        </div>

        <div className="bg-[#2a2a2a] px-3 py-2 rounded-md flex justify-between">
          <span className="text-yellow-400 font-semibold">Med.</span>
          <span>{mediumSolved}/{mediumTotal}</span>
        </div>

        <div className="bg-[#2a2a2a] px-3 py-2 rounded-md flex justify-between">
          <span className="text-red-400 font-semibold">Hard</span>
          <span>{hardSolved}/{hardTotal}</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
