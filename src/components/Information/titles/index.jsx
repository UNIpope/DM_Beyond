import React from "react";

import Background from "../background";
import "./titles.css"

class PStitles extends React.Component {
  render() {
    return (
    <div className="infotitle-container">
        <Background/>
        <p className="infotitle-cname infotitle-titles">Charater Name</p>

        <p className="infotitle-classlevel infotitle-titles">Class + Level</p>
        <p className="infotitle-background infotitle-titles">Background</p>
        <p className="infotitle-playername infotitle-titles">Player Name</p>

        <p className="infotitle-race infotitle-titles">Race</p>
        <p className="infotitle-alignment infotitle-titles">Alignment</p>
        <p className="infotitle-xppoints infotitle-titles">XP Points</p>
    </div>
    );
  }
}
export default PStitles;