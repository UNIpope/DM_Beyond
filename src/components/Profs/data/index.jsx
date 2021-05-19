import React from "react";

import Background from "../background";
import "./data.css"

class PSdata extends React.Component {
  render() {
    const {
      armours, weapons, languages, tools
      } = this.props;

    return (
    <div className="profsdata-container">
        <Background/>
        <div className="profsdata-armor profsdata-text">{armours}</div>
        <div className="profsdata-weapons profsdata-text">{weapons}</div>
        <div className="profsdata-languages profsdata-text">{languages}</div>
        <div className="profsdata-tools profsdata-text">{tools}</div>
    </div>
    );
  }
}
export default PSdata;