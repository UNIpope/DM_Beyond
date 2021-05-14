import React from "react";

import Titles from "../titles";
import "./data.css"

class PSdata extends React.Component {
  render() {
    const {
        cp, sp, gp, pp
      } = this.props;

    return (
    <div className="Moneydata-container">
        <Titles/>
        <input className="Moneydata-cp Moneydata-text" defaultValue={cp} maxlength="4" ></input>
        <input className="Moneydata-sp Moneydata-text" defaultValue={sp} maxlength="4" ></input>
        <input className="Moneydata-gp Moneydata-text" defaultValue={gp} maxlength="4" ></input>
        <input className="Moneydata-pp Moneydata-text" defaultValue={pp} maxlength="4" ></input>

    </div>
    );
  }
}
export default PSdata;