import React from "react";

import ASbackgroundsvg from "./AS90-background.svg";
import "./background.css"

class AS90background extends React.Component {
  render() {
    return (
      <div className="AS90back-container">
        <img src={ASbackgroundsvg} alt="background" draggable="false"/>
      </div>
      
    );
  }
}
export default AS90background;