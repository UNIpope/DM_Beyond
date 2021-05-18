import React from "react";

import Dicebackgroundsvg from "./dice-background.svg";
import "./background.css"

class Dicebackground extends React.Component {
  render() {
    return (
      <div className="diceback-container">
        <img src={Dicebackgroundsvg} alt="background" draggable="false"/>
      </div>
    );
  }
}
export default Dicebackground;