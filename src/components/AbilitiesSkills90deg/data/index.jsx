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
function positiondot(proflvl, what, row) {
  if(proflvl === 2){
    return "AS90data-profdot " + what + " AS90data-expertat" + row
  }

  if(proflvl === 1){
    return "AS90data-profdot " + what + " AS90data-profat" + row
  }

  return "AS90data-nonat"
}

// position "■" based on level
function positionsquare(proflvl, what) {
  if(proflvl === 1){
    return "AS90data-profsquare " + what
  }

  return "AS90data-nonat"
}

// toggle insperation light state with on click
function toggletorch(e) {
  let x = e.target.getAttribute("src")

  if (x.includes("inspirationoff")){
    e.target.setAttribute('src', inspirationon);
  }
  else{
    e.target.setAttribute('src', inspirationoff);
  }
}

class AS90data extends React.Component {
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
      <div className="AS90data-container">
        <Titles/>
        <p className="AS90data-Pbonus AS90data-font">{pbonus}</p> 
        <p className="AS90data-percept AS90data-font">{profskillsave(prof.perception, intmod, pbonus)}</p>

        <p className="AS90data-str AS90data-font">{str}</p>
        <p className="AS90data-strmod AS90data-font">{strmod}</p>

        <p className="AS90data-dex AS90data-font">{dex}</p>
        <p className="AS90data-dexmod AS90data-font">{dexmod}</p>

        <p className="AS90data-con AS90data-font">{con}</p>
        <p className="AS90data-conmod AS90data-font">{conmod}</p>

        <p className="AS90data-int AS90data-font">{int}</p>
        <p className="AS90data-intmod AS90data-font">{intmod}</p>

        <p className="AS90data-wis AS90data-font">{wis}</p>
        <p className="AS90data-wismod AS90data-font">{wismod}</p>

        <p className="AS90data-cha AS90data-font">{cha}</p>
        <p className="AS90data-chamod AS90data-font">{chamod}</p>

        <p className="AS90data-strsave AS90data-font">{profskillsave(prof.strsave, strmod, pbonus)}</p>
        <p className="AS90data-athletics AS90data-font">{profskillsave(prof.athletics, strmod, pbonus)}</p>

        <p className="AS90data-dexsave AS90data-font">{profskillsave(prof.dexsave, dexmod, pbonus)}</p>
        <p className="AS90data-acrobatics AS90data-font">{profskillsave(prof.acrobatics, dexmod, pbonus)}</p>
        <p className="AS90data-sofhand AS90data-font">{profskillsave(prof.sofhand, dexmod, pbonus)}</p>
        <p className="AS90data-stealth AS90data-font">{profskillsave(prof.stealth, dexmod, pbonus)}</p>
        <p className="AS90data-userope AS90data-font">{profskillsave(prof.userope, dexmod, pbonus)}</p>

        <p className="AS90data-consave AS90data-font">{profskillsave(prof.consave, conmod, pbonus)}</p>
        <p className="AS90data-brewing AS90data-font">{profskillsave(prof.brewing, conmod, pbonus)}</p>

        <p className="AS90data-intsave AS90data-font">{profskillsave(prof.intsave, intmod, pbonus)}</p>
        <p className="AS90data-arcana AS90data-font">{profskillsave(prof.arcana, intmod, pbonus)}</p>
        <p className="AS90data-lore AS90data-font">{profskillsave(prof.lore, intmod, pbonus)}</p>
        <p className="AS90data-investigate AS90data-font">{profskillsave(prof.investigate, intmod, pbonus)}</p>
        <p className="AS90data-nature AS90data-font">{profskillsave(prof.nature, intmod, pbonus)}</p>
        <p className="AS90data-religion AS90data-font">{profskillsave(prof.religion, intmod, pbonus)}</p>
        <p className="AS90data-appraisal AS90data-font">{profskillsave(prof.appraisal, intmod, pbonus)}</p>

        <p className="AS90data-wissave AS90data-font">{profskillsave(prof.intsave, intmod, pbonus)}</p>
        <p className="AS90data-animialhand AS90data-font">{profskillsave(prof.animialhand, intmod, pbonus)}</p>
        <p className="AS90data-insight AS90data-font">{profskillsave(prof.insight, intmod, pbonus)}</p>
        <p className="AS90data-medicine AS90data-font">{profskillsave(prof.medicine, intmod, pbonus)}</p>
        <p className="AS90data-perception AS90data-font">{profskillsave(prof.perception, intmod, pbonus)}</p>
        <p className="AS90data-survival AS90data-font">{profskillsave(prof.survival, intmod, pbonus)}</p>

        <p className="AS90data-chasave AS90data-font">{profskillsave(prof.chasave, chamod, pbonus)}</p>
        <p className="AS90data-deception AS90data-font">{profskillsave(prof.deception, chamod, pbonus)}</p>
        <p className="AS90data-intimidation AS90data-font">{profskillsave(prof.intimidation, chamod, pbonus)}</p>
        <p className="AS90data-performance AS90data-font">{profskillsave(prof.performance, chamod, pbonus)}</p>
        <p className="AS90data-persuasion AS90data-font">{profskillsave(prof.persuasion, chamod, pbonus)}</p>

        <span className={positiondot(prof.athletics,"AS90data-dot-athletics", "-r1")}></span>

        <span className={positiondot(prof.acrobatics,"AS90data-dot-acrobatics", "-r2")}></span>
        <span className={positiondot(prof.sofhand,"AS90data-dot-sofhand", "-r2")}></span>
        <span className={positiondot(prof.stealth,"AS90data-dot-stealth", "-r2")}></span>
        <span className={positiondot(prof.userope,"AS90data-dot-userope", "-r2")}></span>

        <span className={positiondot(prof.brewing,"AS90data-dot-brewing", "-r3")}></span>

        <span className={positiondot(prof.arcana,"AS90data-dot-arcana", "-r1")}></span>
        <span className={positiondot(prof.lore,"AS90data-dot-lore", "-r1")}></span>
        <span className={positiondot(prof.investigate,"AS90data-dot-investigate", "-r1")}></span>
        <span className={positiondot(prof.nature,"AS90data-dot-nature", "-r1")}></span>
        <span className={positiondot(prof.religion,"AS90data-dot-religion", "-r1")}></span>
        <span className={positiondot(prof.appraisal,"AS90data-dot-appraisal", "-r1")}></span>

        <span className={positiondot(prof.animialhand,"AS90data-dot-animialhand", "-r2")}></span>
        <span className={positiondot(prof.insight,"AS90data-dot-insight", "-r2")}></span>
        <span className={positiondot(prof.medicine,"AS90data-dot-medicine", "-r2")}></span>
        <span className={positiondot(prof.perception,"AS90data-dot-perception", "-r2")}></span>
        <span className={positiondot(prof.survival,"AS90data-dot-survival", "-r2")}></span>

        <span className={positiondot(prof.deception,"AS90data-dot-deception", "-r3")}></span>
        <span className={positiondot(prof.intimidation,"AS90data-dot-intimidation", "-r3")}></span>
        <span className={positiondot(prof.performance,"AS90data-dot-performance", "-r3")}></span>
        <span className={positiondot(prof.persuasion,"AS90data-dot-persuasion", "-r3")}></span>

        <span className={positionsquare(prof.strsave,"AS90data-profsquare-strsave")}></span>
        <span className={positionsquare(prof.dexsave,"AS90data-profsquare-dexsave")}></span>
        <span className={positionsquare(prof.consave,"AS90data-profsquare-consave")}></span>
        <span className={positionsquare(prof.intsave,"AS90data-profsquare-intsave")}></span>
        <span className={positionsquare(prof.wissave,"AS90data-profsquare-wissave")}></span>
        <span className={positionsquare(prof.chasave,"AS90data-profsquare-chasave")}></span>

        <img className="AS90data-insperationsvg" src={inspirationoff} draggable="false" 
          alt="inspirationon torch"  onClick={toggletorch}/>

      </div>
    );
  }
}
export default AS90data;
