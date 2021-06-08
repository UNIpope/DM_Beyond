import React from "react";

import Infosquarebacksvg from "./Infosquareback-background.svg";
import "./background.css"

class Infosquareback extends React.Component {
  render() {
    return (
      <div className="Infosquareback-container">
        <img src={Infosquarebacksvg} alt="background" draggable="false"/>
      </div>
    );
  }
}
export default Infosquareback;