import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const light = {
    palette: {
      mode: "light",
    },
  };

  const dark = {
    palette: {
      mode: "dark",
    },
  };

  const onToggle = () => {
    setDarkTheme(!darkTheme);
  };
  return (
    <ThemeProvider theme={darkTheme ? dark : light}>
      <div className={darkTheme ? "dark-theme" : "light-theme"}>
        <label className="toggle-switch">
          <input type="checkbox" checked={darkTheme} onChange={onToggle} />
          <span className="switch" />
        </label>
      </div>
    </ThemeProvider>
  );
};
export default ToggleSwitch;
