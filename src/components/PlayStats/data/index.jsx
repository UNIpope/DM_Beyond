import React from "react";

import Titles from "../titles";
import "./data.css"

class PSdata extends React.Component {
  render() {
    const {
        AC, initiative, speed, hitdice, maxHP, tempHP, currentHP
      } = this.props;

    return (
    <div className="PSdata-container">
        <Titles/>
        <p className="PSdata-ac PSdata-text">{AC}</p>
        <p className="PSdata-initiative PSdata-text">{initiative}</p>
        <p className="PSdata-speed PSdata-text">{speed}</p>

        <p className="PSdata-hitdice PSdata-text">{hitdice}</p>
        
        <p className="PSdata-maxHP PSdata-text">{maxHP}</p>
        <input className="PSdata-tempHP PSdata-text" defaultValue={tempHP} maxLength="3" ></input>
        <input className="PSdata-currentHP PSdata-text" defaultValue={currentHP} maxLength="3" ></input>
        
        <input type="checkbox" id="chp1"/>
        <label htmlFor="checkbox1"></label>

        <input type="checkbox" id="chp2"/>
        <label htmlFor="checkbox1"></label>

        <input type="checkbox" id="chp3"/>
        <label htmlFor="checkbox1"></label>

        <input type="checkbox" id="chf1"/>
        <label htmlFor="checkbox1"></label>

        <input type="checkbox" id="chf2"/>
        <label htmlFor="checkbox1"></label>

        <input type="checkbox" id="chf3"/>
        <label htmlFor="checkbox1"></label>
    </div>
    );
  }
}
export default PSdata;