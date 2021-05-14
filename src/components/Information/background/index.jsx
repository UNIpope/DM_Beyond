import React from "react";

import Infobackgroundsvg from "./Info-background.svg";
import "./background.css"

class Infobackground extends React.Component {
  render() {
    return (
      <div className="infoback-container">
        <img src={Infobackgroundsvg} alt="background" draggable="false"/>
      </div>
    );
  }
}
export default Infobackground;