import React from "react";

import Profsbackgroundsvg from "./Profs-background.svg";
import "./background.css"

class Profsbackground extends React.Component {
  render() {
    return (
      <div className="profsback-container">
        <img src={Profsbackgroundsvg} alt="background" draggable="false"/>
        
        <h2 className="profsback-armor profsback-titles">Armor</h2>
        <h2 className="profsback-weapons profsback-titles">Weapons and Tools</h2>
        <h2 className="profsback-languages profsback-titles">Languages</h2>
        <h2 className="profsback-tools profsback-titles">Senses</h2>

        <h1 className="profsback-title profsback-titles">Proficiencies</h1>
      </div>
    );
  }
}
export default Profsbackground;