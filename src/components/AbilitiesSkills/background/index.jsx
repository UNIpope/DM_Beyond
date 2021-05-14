import React from "react";

import ASbackgroundsvg from "./AS-background.svg";
import "./background.css"

class ASbackground extends React.Component {
  render() {
    return (
      <div className="ASback-container">
        <img src={ASbackgroundsvg} alt="background" draggable="false"/>
      </div>
      
    );
  }
}
export default ASbackground;