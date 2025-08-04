import React from "react";

type SettingProps = {
  theme: "light" | "dark";
  settings: {
    lowercase: boolean;
    uppercase: boolean;
    numbers: boolean;
    symbols: boolean;
  };
  setSettings: React.Dispatch<
    React.SetStateAction<{
      lowercase: boolean;
      uppercase: boolean;
      numbers: boolean;
      symbols: boolean;
    }>
  >;
};

const Setting: React.FC<SettingProps> = ({ theme, settings, setSettings }) => {
  const handleCheckboxChange = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const checkboxStyle = `peer w-4 h-4 border-2 transition-colors duration-200 cursor-none appearance-none ${
    theme === "dark"
      ? "border-[#f7f4e7] bg-[#0b1215] checked:bg-[#f7f4e7] checked:border-[#f7f4e7]"
      : "border-[#0b1215] bg-[#f7f4e7] checked:bg-[#0b1215] checked:border-[#0b1215]"
  }`;

  const checkmarkStyle = `pointer-events-none absolute left-0 top-0 flex h-4 w-4 items-center justify-center text-[16px] transition-opacity duration-200 peer-checked:opacity-100 opacity-0 ${
    theme === "dark" ? "text-[#0b1215]" : "text-[#f7f4e7]"
  }`;

  const labelStyle = `ml-2 text-sm font-medium transition-colors duration-200 ${
    theme === "dark" ? "text-[#f7f4e7]" : "text-[#0b1215]"
  }`;

  return (
    <div
      className={`space-y-4 rounded-lg transition-colors duration-200 ${
        theme === "dark"
      }`}
    >
      <div className="space-y-3">
        <label className="flex items-center cursor-none">
          <span className="relative">
            <input
              type="checkbox"
              checked={settings.lowercase}
              onChange={() => handleCheckboxChange("lowercase")}
              className={checkboxStyle}
            />
            <span className={checkmarkStyle}>✓</span>
          </span>
          <span className={labelStyle}>Include Lower Letters (a-z)</span>
        </label>
        <label className="flex items-center cursor-none">
          <span className="relative">
            <input
              type="checkbox"
              checked={settings.uppercase}
              onChange={() => handleCheckboxChange("uppercase")}
              className={checkboxStyle}
            />
            <span className={checkmarkStyle}>✓</span>
          </span>
          <span className={labelStyle}>Include Upper Letters (A-Z)</span>
        </label>
        <label className="flex items-center cursor-none">
          <span className="relative">
            <input
              type="checkbox"
              checked={settings.numbers}
              onChange={() => handleCheckboxChange("numbers")}
              className={checkboxStyle}
            />
            <span className={checkmarkStyle}>✓</span>
          </span>
          <span className={labelStyle}>Include Numbers (0-9)</span>
        </label>
        <label className="flex items-center cursor-none">
          <span className="relative">
            <input
              type="checkbox"
              checked={settings.symbols}
              onChange={() => handleCheckboxChange("symbols")}
              className={checkboxStyle}
            />
            <span className={checkmarkStyle}>✓</span>
          </span>
          <span className={labelStyle}>Include Symbols (!@#$%^&*)</span>
        </label>
      </div>
    </div>
  );
};

export default Setting;
