import "./App.css";
import React from "react";

import AbilitiesSkills from "./components/AbilitiesSkills/data";
import Iformation from "./components/Information/data";
import PlayStats from "./components/PlayStats/data";
import Money from "./components/Money/data";
import DiceRoller from "./components/DiceRoller/data";
import Actions from "./components/Actions/data";

import chardt from "./data/Nightblood.json";

class App extends React.Component {
  render(){
    return (
      <div className="app-container">
        <AbilitiesSkills {...chardt.abilitiesSkills}/>
        <Iformation {...chardt.information} />
        <PlayStats {...chardt.playStats}/>
        <Actions {...chardt.actions}/>
        
        <Money {...chardt.money}/>
        <DiceRoller/>
      </div>
    );
  }
}
export default App;
