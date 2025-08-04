import React from 'react';

type ButtonProps = {
  onClick: () => void;
  theme: "light" | "dark";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, theme, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105 active:scale-95 cursor-none ${
        theme === "dark"
          ? "bg-[#f7f4e7] text-[#0b1215] hover:bg-[#e8e0d8] border border-[#f7f4e7] hover:border-[#e8e0d8]"
          : "bg-[#0b1215] text-[#f7f4e7] hover:bg-[#1a2a2f] border border-[#0b1215] hover:border-[#1a2a2f]"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;