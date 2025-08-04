import React, { useState, useEffect } from "react";
import Display from "../display/display";
import Setting from "../setting/setting";
import Indicator from "../indicator/indicator";
import Button from "../button/button";

type MainProps = {
  theme: "light" | "dark";
};

const getRandomChar = (chars: string) =>
  chars[Math.floor(Math.random() * chars.length)];

const generatePassword = (settings: any, length = 15) => {
  let chars = "";
  if (settings.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
  if (settings.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (settings.numbers) chars += "0123456789";
  if (settings.symbols) chars += "!@#$%^&*";

  // Ensure at least 2 character types are selected
  const selectedTypes = [
    settings.lowercase,
    settings.uppercase,
    settings.numbers,
    settings.symbols,
  ].filter(Boolean).length;

  if (selectedTypes < 2) {
    // If less than 2 types selected, add missing types to ensure at least 2
    if (!settings.lowercase) chars += "abcdefghijklmnopqrstuvwxyz";
    if (!settings.uppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (!settings.numbers) chars += "0123456789";
    if (!settings.symbols) chars += "!@#$%^&*";
  }

  if (!chars) return "";
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += getRandomChar(chars);
  }
  return pwd;
};

const getStrength = (password: string, settings: any) => {
  let score = 0;
  if (settings.lowercase) score++;
  if (settings.uppercase) score++;
  if (settings.numbers) score++;
  if (settings.symbols) score++;
  if (password.length >= 12) score++;
  // Clamp to 4
  return Math.min(score, 4);
};

const Main: React.FC<MainProps> = ({ theme }) => {
  const [settings, setSettings] = useState({
    lowercase: true,
    uppercase: true,
    numbers: true,
    symbols: true,
  });
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(1);

  const generateNewPassword = () => {
    const pwd = generatePassword(settings);
    setPassword(pwd);
    setStrength(getStrength(pwd, settings));
  };

  useEffect(() => {
    generateNewPassword();
  }, [settings]);

  return (
    <main className="w-full min-h-[100dvh] flex flex-col justify-center items-center gap-8">
      <Display theme={theme} password={password} />
      <Setting theme={theme} settings={settings} setSettings={setSettings} />
      <Indicator theme={theme} strength={strength} />
      <Button onClick={generateNewPassword} theme={theme}>
        Generate Password
      </Button>
    </main>
  );
};

export default Main;
