import React from "react";

import Moneybackgroundsvg from "./Money-background.svg";
import "./background.css"

class Moneybackground extends React.Component {
  render() {
    return (
      <div className="Moneyback-container">
        <img src={Moneybackgroundsvg} alt="background" draggable="false"/>
      </div>
    );
  }
}
export default Moneybackground;