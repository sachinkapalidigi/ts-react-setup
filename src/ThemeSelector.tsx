import React from "react";
import useTheme from "./hooks/useTheme";

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme()!;

  console.log("theme selector renders");
  return (
    <div>
      <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        <option value="white">White</option>
        <option value="lightblue">Blue</option>
        <option value="lightgreen">Green</option>
      </select>
    </div>
  );
};

export default ThemeSelector;
