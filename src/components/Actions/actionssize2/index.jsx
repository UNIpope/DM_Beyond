import React from "react";

import Actionsbackgroundsvg from "./actionssize2-background.svg";
import "./Actionssize2.css"

class Actionssize1 extends React.Component {
  render() {
    return (
      <div className="Actionsback-container">
        <img src={Actionsbackgroundsvg} alt="background" draggable="false"/>

        <h1 className="action-name action-title">Name</h1>
        <h1 className="action-hitdc action-title">DC</h1>
        <h1 className="action-effect action-title">Effect</h1>
        <h1 className="action-desc action-title">Description</h1>
        
        <h1 className="action-main action-title">Acadadadtions</h1>
      </div>
    );
  }
}
export default Actionssize1;