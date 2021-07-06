import React from "react";

import Background from "../background";
import "./titles.css"

class AS90titles extends React.Component {
  render() {
    return (
    <div className="AS90title-container">
        <Background/>
        <p className="AS90title-inspiration AS90title-titles">Inspiration</p>
        <p className="AS90title-pbonus AS90title-titles">Prof. Bonus</p>
        <p className="AS90title-perception AS90title-titles">Perception</p>
        
        <p className="AS90title-str AS90title-titles">Strength</p>
        <p className="AS90title-strsave AS90title-titles">Saving Throw</p>
        <p className="AS90title-athletics AS90title-titles">Athletics</p>
        
        <p className="AS90title-dex AS90title-titles">Dexterity</p>
        <p className="AS90title-dexsave AS90title-titles">Saving Throw</p>
        <p className="AS90title-acrobatics AS90title-titles">Acrobatics</p>
        <p className="AS90title-sofhand AS90title-titles">Sleight of Hand</p>
        <p className="AS90title-stealth AS90title-titles">Stealth</p>
        <p className="AS90title-rope AS90title-titles">Use Rope</p>

        <p className="AS90title-con AS90title-titles">Constitution</p>
        <p className="AS90title-consave AS90title-titles">Saving Throw</p>
        <p className="AS90title-brewing AS90title-titles">Brewing</p>

        <p className="AS90title-int AS90title-titles">Intelligence</p>
        <p className="AS90title-intsave AS90title-titles">Saving Throw</p>
        <p className="AS90title-arcana AS90title-titles">Arcana</p>
        <p className="AS90title-history AS90title-titles">Lore</p>
        <p className="AS90title-invest AS90title-titles">Investigation</p>
        <p className="AS90title-nature AS90title-titles">Nature</p>
        <p className="AS90title-religion AS90title-titles">Religion</p>
        <p className="AS90title-appraisal AS90title-titles">Appraisal</p>

        <p className="AS90title-wis AS90title-titles">Wisdom</p>
        <p className="AS90title-wissave AS90title-titles">Saving Throw</p>
        <p className="AS90title-ahand AS90title-titles">Animal Handling</p>
        <p className="AS90title-insight AS90title-titles">Insight</p>
        <p className="AS90title-medicine AS90title-titles">Medicine</p>
        <p className="AS90title-percept AS90title-titles">Perception</p>
        <p className="AS90title-survival AS90title-titles">Survival</p>

        <p className="AS90title-cha AS90title-titles">charisma</p>
        <p className="AS90title-chasave AS90title-titles">Saving Throw</p>
        <p className="AS90title-deception AS90title-titles">Deception</p>
        <p className="AS90title-intimidate AS90title-titles">Intimidation</p>
        <p className="AS90title-performance AS90title-titles">Performance</p>
        <p className="AS90title-persuasion AS90title-titles">Persuasion</p>
    </div>
    );
  }
}
export default AS90titles;