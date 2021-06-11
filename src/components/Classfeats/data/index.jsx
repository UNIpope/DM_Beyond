import React from "react";
import "./data.css";

import Classfeatsback from "../background";

function TitleOrClass(name) {
  if (name){ return name; }
  else{ return "Class Features";}
}

function Retline(abilitie, i){
  return <div key={"classfeatdata-key-"+i} className="classfeatdata-text classfeatdata-row-container" id={ "classfeatdata-row-" + i }>
    <div className="classfeatdata-lvlname">
      <span className="classfeatdata-lvl">{abilitie.lvl}  </span>
      <span className="classfeatdata-name">{abilitie.name}</span>
    </div>
    <div className="classfeatdata-shorttxt">{abilitie.shorttxt}</div>
  </div>
}

function ClassAbilities(abilities) {
  var arr = [];
  for (var i = 0; i < abilities.length; i++) {
    arr.push(Retline(abilities[i], i));
  }
  return Array.from(arr)
}

class Featdata extends React.Component {
  render() {
    const {subname, abilities} = this.props;
    return (
      <div className="classfeatdata-container">
        <Classfeatsback />

        <div className="classfeatdata-title classfeatdata-text">
          {TitleOrClass(subname)}
        </div>

        {ClassAbilities(abilities)}
      </div>
    );
  }
}
export default Featdata;
