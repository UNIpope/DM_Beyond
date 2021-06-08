import "./App.css";
import React from "react";

import AbilitiesSkills from "./components/AbilitiesSkills/data";
import Iformation from "./components/Information/data";
import PlayStats from "./components/PlayStats/data";
import Money from "./components/Money/data";
import DiceRoller from "./components/DiceRoller/data";
import Actions from "./components/Actions/data";
import Profs from "./components/Profs/data";
import Feats from "./components/Feats/data"
import ClassFeats from "./components/Classfeats/data";

import Infosquare from "./components/infosquare/background";

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
          <Infosquare/>

          {/*
          <Actions {...chardt.actions}/>
          <Feats {...chardt.feats}/>
          
          <ClassFeats />
          */}

        </div>

        <div className="mondice-container">
            <div></div>
            <div></div>
            <Money {...chardt.money}/>
            <DiceRoller/>
            <div></div>
            <div></div>
        </div>

      </div>
      
    );
  }
}
export default App;
