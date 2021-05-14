import "./App.css";
import React from "react";

import AbilitiesSkills from "./components/AbilitiesSkills/data";
import Iformation from "./components/Information/data";
import PlayStats from "./components/PlayStats/data";

import Money from "./components/Money/data";
class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <AbilitiesSkills {...AbilitiesSkillsData}/>
        <Iformation {...iformationDatalessData} />
        <PlayStats {...PlayStatdata}/>
        <Money {...Moneydata}/>
      </div>
    );
  }
}
export default App;


// Action data 
const actionData1 = {
  actname: "longasdad",
  hitAc: "00AC",
  damage: "00D20+0",
  type: "Bludgeoning",
};
const actionData2 = {
  actname: "attN",
  hitAc: "00AC",
  damage: "00D20+0",
  type: "Bludgeoning",
};
const actionData3 = {
  actname: "attN",
  hitAc: "00AC",
  damage: "00D20+0",
  type: "Bludgeoning",
};
const actionData4 = {
  actname: "attN",
  hitAc: "00AC",
  damage: "00D20+0",
  type: "Bludgeoning",
};

const actionData5 = {
  actname: "attN",
  hitAc: "00AC",
  damage: "00D20+0",
  type: "Bludgeoning",
};

const actionsData = {
  actionData1,
  actionData2,
  actionData3,
  actionData4,
  actionData5,
};

//information
const iformationDatalessData = {
  characterName: "NightBlood (James)",
  classLevel: "Warlock 6 / Rouge 2",
  race: "Half- Dragon",
  background: "Haunted One",
  alignment: "Chaotic Good",
  playerName: "Ya Boi",
  xpPoints: "34,000"
};

//PlayStats 
const PlayStatdata = { 
  AC:"20", 
  initiative:"+4", 
  speed:"30", 
  hitdice:"8d8+2", 
  maxHP:"70", 
  tempHP:"0", 
  currentHP:"21"
}

//AbilitiesSkills
//not0 prof1 expert2 
const prof ={
  strsave: 0,
  athletics: 0,
  dexsave: 0,
  acrobatics: 0,
  sofhand: 1,
  stealth: 2,
  userope: 0,
  consave: 0,
  brewing: 0,
  intsave: 0,
  arcana: 0,
  lore: 1,
  investigate: 1,
  nature: 0,
  religion: 0,
  appraisal: 0,
  wissave: 1,
  animialhand: 0,
  insight: 0,
  medicine: 0,
  perception: 0,
  survival: 1,
  chasave: 1,
  deception: 2,
  intimidation: 1,
  performance: 0,
  persuasion: 0
}
const AbilitiesSkillsData ={
  pbonus: "+3", 
  str: "15", 
  strmod: "+2", 
  dex: "19", 
  dexmod: "+4",
  con: "14", 
  conmod: "+2",
  int: "11", 
  intmod: "+0",
  wis: "08", 
  wismod: "-1",
  cha: "20", 
  chamod: "+5",
  prof
}

//money data
const Moneydata ={
  cp:"200",
  sp:"90",
  gp:"3340",
  pp:"3"
}