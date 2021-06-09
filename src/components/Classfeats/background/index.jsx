import React from "react";

import classfeatsbackground from "./classfeats-back.svg";
import "./background.css"

class Classfeatsback extends React.Component {
  render() {
    return (
      <div className="classfeatsback-container">
        <img src={classfeatsbackground} alt="background" draggable="false"/>
      </div>
    );
  }
}
export default Classfeatsback;