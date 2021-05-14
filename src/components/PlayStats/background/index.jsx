import React from "react";

import PSbackgroundsvg from "./PS-background.svg";
import "./background.css"

class ASbackground extends React.Component {
  render() {
    return (
      <div className="ASback-container">
        <img src={PSbackgroundsvg} alt="background" draggable="false"/>
      </div>
      
    );
  }
}
export default ASbackground;