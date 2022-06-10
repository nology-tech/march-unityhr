import React from "react";

import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-mode-toggle">
      {/* <ToggleSwitch checked={darkMode.value} onChange={darkMode.toggle} /> */}
    </div>
  );
};

export default DarkModeToggle;
