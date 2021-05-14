import React from "react";

import Titles from "../titles";
import "./data.css"

class Infodata extends React.Component {
  render() {
    const {
      characterName, classLevel, race, background, alignment, playerName, xpPoints
      } = this.props;

    return (
    <div className="infodata-container">
        <Titles/>
        <p className="infodata-cname infodata-text">{characterName}</p>

        <p className="infodata-classlevel infodata-text">{classLevel}</p>
        <p className="infodata-background infodata-text">{background}</p>
        <p className="infodata-playername infodata-text">{playerName}</p>

        <p className="infodata-race infodata-text">{race}</p>
        <p className="infodata-alignment infodata-text">{alignment}</p>
        <p className="infodata-xppoints infodata-text">{xpPoints}</p>
    </div>
    );
  }
}
export default Infodata;