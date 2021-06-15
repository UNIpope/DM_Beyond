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

function yeqmxpc(width){
  if (width <= 900){
    return .9
  }
  let zoom = (width + 142.67) / 1213.33
  zoom = zoom.toFixed(1)
  return zoom 
}

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

function GetZoom() {
  const [dimensions, setDimensions] = React.useState({ 
    zoom: yeqmxpc(window.innerWidth)
  })

  React.useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        zoom: yeqmxpc(window.innerWidth)
      })
    }, 350)

    window.addEventListener('resize', debouncedHandleResize)

    return _ => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  })
  
  return dimensions.zoom
}

function App() {
    return (
      <div className="app-container" style={{zoom: GetZoom()}}>
        <div className="main-container">
          <AbilitiesSkills {...chardt.abilitiesSkills}/>
          <Iformation {...chardt.information} />
          <PlayStats {...chardt.playStats}/>
          <Profs {...chardt.profs}/>
          <Infosquare {...chardt}/>
          <ClassFeats {...chardt.features.classfeats}/>
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
export default App;
