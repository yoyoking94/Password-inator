import React from "react";

type IndicatorProps = {
  theme: "light" | "dark";
  strength: number; // 1 to 4
};

const getColor = (idx: number, strength: number) => {
  if (idx >= strength) return "bg-gray-300 border-gray-400";
  if (strength === 1) return "bg-red-500 border-red-600";
  if (strength === 2) return "bg-yellow-400 border-yellow-500";
  if (strength === 3) return "bg-yellow-500 border-yellow-600";
  if (strength === 4) return "bg-green-500 border-green-600";
  return "bg-gray-300 border-gray-400";
};

const Indicator: React.FC<IndicatorProps> = ({ theme, strength }) => {
  return (
    <div className="flex gap-2">
      {[0, 1, 2, 3].map((idx) => (
        <div
          key={idx}
          className={`w-5 h-10 rounded-sm border-2 transition-colors duration-200 ${getColor(idx, strength)}`}
        ></div>
      ))}
    </div>
  );
};

export default Indicator;
