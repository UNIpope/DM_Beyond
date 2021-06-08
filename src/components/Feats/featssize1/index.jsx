import React from "react";

import featsizebackground from "./featsize1-background.svg";
import "./featsize1.css"

class Featssize1 extends React.Component {
  render() {
    return (
      <div className="featsize1back-container">
        <img src={featsizebackground} alt="background" draggable="false"/>
        <h1 className="featsize1back-name featsize1back-text">Feats</h1>
      </div>
    );
  }
}
export default Featssize1;