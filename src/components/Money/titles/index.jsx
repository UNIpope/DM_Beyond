import React from "react";

import Background from "../background";
import "./titles.css"

class PStitles extends React.Component {
  render() {
    return (
    <div className="Moneytitle-container">
        <Background/>
        <p className="Moneytitle-cp Moneytitle-titles">CP</p>
        <p className="Moneytitle-sp Moneytitle-titles">SP</p>
        <p className="Moneytitle-gp Moneytitle-titles">GP</p>
        <p className="Moneytitle-pp Moneytitle-titles">PP</p>
    </div>
    );
  }
}
export default PStitles;