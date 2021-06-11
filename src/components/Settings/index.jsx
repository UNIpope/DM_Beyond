import React from "react";

import Cogsvg from "./cog.svg";
import "./settings.css"

class Settings extends React.Component {
  render() {
    return (
      <div className="settings-container">
        <img onClick={() => alert('You have clicked the coooooggg.')} src={Cogsvg} alt="settings menu button" draggable="false"/>
      </div>
    );
  }
}
export default Settings;