import React from "react";

import classfeatsbackground from "./classfeats-back.svg";
import "./background.css"

class Classfeatsback extends React.Component {
  render() {
    return (
      <div className="classfeatsback-container">
        <img src={classfeatsbackground} alt="background" draggable="false"/>
        <h1 className="classfeatsback-name classfeatsback-text">Class Features</h1>
      </div>
    );
  }
}
export default Classfeatsback;