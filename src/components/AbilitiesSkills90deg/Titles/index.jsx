import React from "react";

import Background from "../background";
import "./titles.css"

class AS90titles extends React.Component {
  render() {
    return (
    <div className="AStitle-container">
        <Background/>
        <p className="AStitle-inspiration AStitle-titles">Inspiration</p>
        <p className="AStitle-pbonus AStitle-titles">Prof. Bonus</p>
        <p className="AStitle-perception AStitle-titles">Perception</p>
        
        <p className="AStitle-str AStitle-titles">Strength</p>
        <p className="AStitle-strsave AStitle-titles">Saving Throw</p>
        <p className="AStitle-athletics AStitle-titles">Athletics</p>
        
        <p className="AStitle-dex AStitle-titles">Dexterity</p>
        <p className="AStitle-dexsave AStitle-titles">Saving Throw</p>
        <p className="AStitle-acrobatics AStitle-titles">Acrobatics</p>
        <p className="AStitle-sofhand AStitle-titles">Sleight of Hand</p>
        <p className="AStitle-stealth AStitle-titles">Stealth</p>
        <p className="AStitle-rope AStitle-titles">Use Rope</p>

        <p className="AStitle-con AStitle-titles">Constitution</p>
        <p className="AStitle-consave AStitle-titles">Saving Throw</p>
        <p className="AStitle-brewing AStitle-titles">Brewing</p>

        <p className="AStitle-int AStitle-titles">Intelligence</p>
        <p className="AStitle-intsave AStitle-titles">Saving Throw</p>
        <p className="AStitle-arcana AStitle-titles">Arcana</p>
        <p className="AStitle-history AStitle-titles">Lore</p>
        <p className="AStitle-invest AStitle-titles">Investigation</p>
        <p className="AStitle-nature AStitle-titles">Nature</p>
        <p className="AStitle-religion AStitle-titles">Religion</p>
        <p className="AStitle-appraisal AStitle-titles">Appraisal</p>

        <p className="AStitle-wis AStitle-titles">Wisdom</p>
        <p className="AStitle-wissave AStitle-titles">Saving Throw</p>
        <p className="AStitle-ahand AStitle-titles">Animal Handling</p>
        <p className="AStitle-insight AStitle-titles">Insight</p>
        <p className="AStitle-medicine AStitle-titles">Medicine</p>
        <p className="AStitle-percept AStitle-titles">Perception</p>
        <p className="AStitle-survival AStitle-titles">Survival</p>

        <p className="AStitle-cha AStitle-titles">charisma</p>
        <p className="AStitle-chasave AStitle-titles">Saving Throw</p>
        <p className="AStitle-deception AStitle-titles">Deception</p>
        <p className="AStitle-intimidate AStitle-titles">Intimidation</p>
        <p className="AStitle-performance AStitle-titles">Performance</p>
        <p className="AStitle-persuasion AStitle-titles">Persuasion</p>
    </div>
    );
  }
}
export default AS90titles;