import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <span>
      <ToggleSwitch checked={darkMode.value} onChange={darkMode.toggle} />
    </span>
  );
};

export default DarkModeCommands;
