import React from "react";
import Titles from "../Titles";
import "./data.css"

import inspirationon from "./inspirationon.svg";
import inspirationoff from "./inspirationoff.svg";

// format and calculate prof level in skill
function profskillsave(level, mod, pbonus) {
  let outi = 0
  if(level === 0 ){
    outi =  parseInt(mod)
  }else if(level === 1 ){
    outi = parseInt(mod) + parseInt(pbonus)
  }else if(level === 2 ){
    outi = parseInt(mod) + parseInt(pbonus) + parseInt(pbonus)
  }

  if(outi < 0){ 
    return outi.toString() 
  }else{ 
    return "+" + outi.toString() 
  }
}

// position "o" based on level
function positiondot(proflvl, what) {
  if(proflvl === 2){
    return "ASdata-profdot " + what + " ASdata-expertat"
  }

  if(proflvl === 1){
    return "ASdata-profdot " + what + " ASdata-profat"
  }

  return "ASdata-nonat"
}

// position "■" based on level
function positionsquare(proflvl, what) {
  if(proflvl === 1){
    return "ASdata-profsquare " + what
  }

  return "ASdata-nonat"
}

// toggle insperation light state with on clicl 
function toggletorch(e) {
  let x = e.target.getAttribute("src")

  if (x.includes("inspirationoff")){
    e.target.setAttribute('src', inspirationon);
  }
  else{
    e.target.setAttribute('src', inspirationoff);
  }
}

class ASdata extends React.Component {
  componentDidMount() {
    const imageList = [inspirationon, inspirationoff]
    imageList.forEach((image) => {
        new Image().src = image
    });
  }

  render() {
    const {
      pbonus, str, strmod, dex, dexmod, con, 
      conmod, int, intmod, wis, wismod, cha, chamod, prof
    } = this.props;
    
    return (
      <div className="ASdata-container">
        <Titles/>
        <p className="ASdata-Pbonus ASdata-font">{pbonus}</p> 
        <p className="ASdata-percept ASdata-font">{profskillsave(prof.perception, intmod, pbonus)}</p>

        <p className="ASdata-str ASdata-font">{str}</p>
        <p className="ASdata-strmod ASdata-font">{strmod}</p>

        <p className="ASdata-dex ASdata-font">{dex}</p>
        <p className="ASdata-dexmod ASdata-font">{dexmod}</p>

        <p className="ASdata-con ASdata-font">{con}</p>
        <p className="ASdata-conmod ASdata-font">{conmod}</p>

        <p className="ASdata-int ASdata-font">{int}</p>
        <p className="ASdata-intmod ASdata-font">{intmod}</p>

        <p className="ASdata-wis ASdata-font">{wis}</p>
        <p className="ASdata-wismod ASdata-font">{wismod}</p>

        <p className="ASdata-cha ASdata-font">{cha}</p>
        <p className="ASdata-chamod ASdata-font">{chamod}</p>

        <p className="ASdata-strsave ASdata-font">{profskillsave(prof.strsave, strmod, pbonus)}</p>
        <p className="ASdata-athletics ASdata-font">{profskillsave(prof.athletics, strmod, pbonus)}</p>

        <p className="ASdata-dexsave ASdata-font">{profskillsave(prof.dexsave, dexmod, pbonus)}</p>
        <p className="ASdata-acrobatics ASdata-font">{profskillsave(prof.acrobatics, dexmod, pbonus)}</p>
        <p className="ASdata-sofhand ASdata-font">{profskillsave(prof.sofhand, dexmod, pbonus)}</p>
        <p className="ASdata-stealth ASdata-font">{profskillsave(prof.stealth, dexmod, pbonus)}</p>
        <p className="ASdata-userope ASdata-font">{profskillsave(prof.userope, dexmod, pbonus)}</p>

        <p className="ASdata-consave ASdata-font">{profskillsave(prof.consave, conmod, pbonus)}</p>
        <p className="ASdata-brewing ASdata-font">{profskillsave(prof.brewing, conmod, pbonus)}</p>

        <p className="ASdata-intsave ASdata-font">{profskillsave(prof.intsave, intmod, pbonus)}</p>
        <p className="ASdata-arcana ASdata-font">{profskillsave(prof.arcana, intmod, pbonus)}</p>
        <p className="ASdata-lore ASdata-font">{profskillsave(prof.lore, intmod, pbonus)}</p>
        <p className="ASdata-investigate ASdata-font">{profskillsave(prof.investigate, intmod, pbonus)}</p>
        <p className="ASdata-nature ASdata-font">{profskillsave(prof.nature, intmod, pbonus)}</p>
        <p className="ASdata-religion ASdata-font">{profskillsave(prof.religion, intmod, pbonus)}</p>
        <p className="ASdata-appraisal ASdata-font">{profskillsave(prof.appraisal, intmod, pbonus)}</p>

        <p className="ASdata-wissave ASdata-font">{profskillsave(prof.intsave, intmod, pbonus)}</p>
        <p className="ASdata-animialhand ASdata-font">{profskillsave(prof.animialhand, intmod, pbonus)}</p>
        <p className="ASdata-insight ASdata-font">{profskillsave(prof.insight, intmod, pbonus)}</p>
        <p className="ASdata-medicine ASdata-font">{profskillsave(prof.medicine, intmod, pbonus)}</p>
        <p className="ASdata-perception ASdata-font">{profskillsave(prof.perception, intmod, pbonus)}</p>
        <p className="ASdata-survival ASdata-font">{profskillsave(prof.survival, intmod, pbonus)}</p>

        <p className="ASdata-chasave ASdata-font">{profskillsave(prof.chasave, chamod, pbonus)}</p>
        <p className="ASdata-deception ASdata-font">{profskillsave(prof.deception, chamod, pbonus)}</p>
        <p className="ASdata-intimidation ASdata-font">{profskillsave(prof.intimidation, chamod, pbonus)}</p>
        <p className="ASdata-performance ASdata-font">{profskillsave(prof.performance, chamod, pbonus)}</p>
        <p className="ASdata-persuasion ASdata-font">{profskillsave(prof.persuasion, chamod, pbonus)}</p>

        <span className={positiondot(prof.athletics,"ASdata-dot-athletics")}></span>

        <span className={positiondot(prof.acrobatics,"ASdata-dot-acrobatics")}></span>
        <span className={positiondot(prof.sofhand,"ASdata-dot-sofhand")}></span>
        <span className={positiondot(prof.stealth,"ASdata-dot-stealth")}></span>
        <span className={positiondot(prof.userope,"ASdata-dot-userope")}></span>

        <span className={positiondot(prof.brewing,"ASdata-dot-brewing")}></span>

        <span className={positiondot(prof.arcana,"ASdata-dot-arcana")}></span>
        <span className={positiondot(prof.lore,"ASdata-dot-lore")}></span>
        <span className={positiondot(prof.investigate,"ASdata-dot-investigate")}></span>
        <span className={positiondot(prof.nature,"ASdata-dot-nature")}></span>
        <span className={positiondot(prof.religion,"ASdata-dot-religion")}></span>
        <span className={positiondot(prof.appraisal,"ASdata-dot-appraisal")}></span>

        <span className={positiondot(prof.animialhand,"ASdata-dot-animialhand")}></span>
        <span className={positiondot(prof.insight,"ASdata-dot-insight")}></span>
        <span className={positiondot(prof.medicine,"ASdata-dot-medicine")}></span>
        <span className={positiondot(prof.perception,"ASdata-dot-perception")}></span>
        <span className={positiondot(prof.survival,"ASdata-dot-survival")}></span>

        <span className={positiondot(prof.deception,"ASdata-dot-deception")}></span>
        <span className={positiondot(prof.intimidation,"ASdata-dot-intimidation")}></span>
        <span className={positiondot(prof.performance,"ASdata-dot-performance")}></span>
        <span className={positiondot(prof.persuasion,"ASdata-dot-persuasion")}></span>

        <span className={positionsquare(prof.strsave,"ASdata-profsquare-strsave")}></span>
        <span className={positionsquare(prof.dexsave,"ASdata-profsquare-dexsave")}></span>
        <span className={positionsquare(prof.consave,"ASdata-profsquare-consave")}></span>
        <span className={positionsquare(prof.intsave,"ASdata-profsquare-intsave")}></span>
        <span className={positionsquare(prof.wissave,"ASdata-profsquare-wissave")}></span>
        <span className={positionsquare(prof.chasave,"ASdata-profsquare-chasave")}></span>

        <img className="ASdata-insperationsvg" src={inspirationoff} draggable="false" 
          alt="inspirationon torch"  onClick={toggletorch}/>

      </div>
    );
  }
}
export default ASdata;
