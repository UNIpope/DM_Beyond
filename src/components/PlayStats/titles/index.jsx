import React from "react";

import Background from "../background";
import "./titles.css"

class PStitles extends React.Component {
  render() {
    return (
    <div className="PStitle-container">
        <Background/>
        <p className="PStitle-ac PStitle-titles">AC</p>
        <p className="PStitle-initiative PStitle-titles">Initiative</p>
        <p className="PStitle-speed PStitle-titles">Speed</p>

        <p className="PStitle-deathsave PStitle-titles">Death Save</p>
        <p className="PStitle-deathsave-s PStitle-titles">S</p>
        <p className="PStitle-deathsave-f PStitle-titles">F</p>

        <p className="PStitle-hitdice PStitle-titles">Hit Dice</p>

        <p className="PStitle-temphp PStitle-titles">Temp HP</p>
        <p className="PStitle-maxhp PStitle-titles">Max HP</p>
        <p className="PStitle-currentHP PStitle-titles">Current HP</p>
    </div>
    );
  }
}
export default PStitles;