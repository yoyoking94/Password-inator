import { useState } from "react";

import CustomCursor from "@/components/customCursor/customCursor";
import ThemeToggle from "@/components/themeToggle/themeToggle";

import Main from "@/components/main/main";

export default function Home() {
  const LIGHT = {
    background: "#f7f4e7",
    color: "#0b1215",
  };

  const DARK = {
    background: "#0b1215",
    color: "#f7f4e7",
  };

  // Gestion du thème
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const currentTheme = theme === "light" ? LIGHT : DARK;
  const handleToggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };
  return (
    <div
      style={{
        backgroundColor: currentTheme.background,
        color: currentTheme.color,
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <Main theme={theme} />
      <ThemeToggle onToggle={handleToggleTheme} theme={theme} />
      <CustomCursor />
    </div>
  );
}
