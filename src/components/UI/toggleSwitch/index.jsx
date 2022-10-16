import React from "react";

import "./index.css";

const ToggleSwitch = () => {
  return (
    <div>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
