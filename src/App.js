import "./App.css";
import React from "react";

import AbilitiesSkills from "./components/AbilitiesSkills/data";
import Iformation from "./components/Information/data";
import PlayStats from "./components/PlayStats/data";
import Money from "./components/Money/data";
import DiceRoller from "./components/DiceRoller/data";
import Profs from "./components/Profs/data";
import ClassFeats from "./components/Classfeats/data";

import Infosquare from "./components/infosquare/titles";

import Settings from "./components/Settings";

import chardt from "./data/Nightblood.json";

class App extends React.Component {
  render(){
    return (
      <div className="app-container">
        <div className="main-container">
          <AbilitiesSkills {...chardt.abilitiesSkills}/>
          <Iformation {...chardt.information} />
          <PlayStats {...chardt.playStats}/>
          <Profs {...chardt.profs}/>
          <Infosquare {...chardt.infosquare}/>
          <ClassFeats {...chardt.classfeats}/>
        </div>

        <div className="mondice-container">
            <div></div>
            <div></div>
            <Money {...chardt.money}/>
            <Settings />
            <DiceRoller/>
            <div></div>
            <div></div>
        </div>

      </div>
      
    );
  }
}
export default App;
