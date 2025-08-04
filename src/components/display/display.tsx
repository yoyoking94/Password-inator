import React, { useState } from "react";

type DisplayProps = {
  theme: "light" | "dark";
  password: string;
};

const Display: React.FC<DisplayProps> = ({ theme, password }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    const input = document.getElementById("diplay") as HTMLInputElement;
    if (input && input.value) {
      navigator.clipboard
        .writeText(input.value)
        .then(() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy: ", err);
        });
    }
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="display" className="flex justify-center aligns-center">
        <input
          type="text"
          name="display"
          id="diplay"
          placeholder="P4S5W0RD"
          value={password}
          className={`w-150 px-4 py-3 cursor-none rounded-lg border-2 transition-colors duration-200 ${
            theme === "dark"
          }`}
          readOnly
        />
        <button
          onClick={handleCopyToClipboard}
          className={`px-4 py-3 rounded-lg cursor-none duration-200 hover:scale-105 active:scale-95 transition-all ease-in-out ${
            theme === "dark"
          } hoverable`}
          title="Copy to clipboard"
        >
          <span
            className={`inline-block transition-all duration-300 ease-in-out transform ${
              copied ? "scale-110 rotate-12" : "scale-100 rotate-0"
            }`}
          >
            {copied ? "✅" : "📋"}
          </span>
        </button>
      </label>
    </div>
  );
};

export default Display;
