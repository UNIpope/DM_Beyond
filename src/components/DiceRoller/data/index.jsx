import anime from "animejs";
import React from "react";

import Background from "../background";
import "./data.css"

class Dicedata extends React.Component {
    handleClick = () => {
        var radios = document.getElementsByName('dice');
        var diceval = 20

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                diceval= radios[i].value
                break;
            }
        }

        document.getElementById('dicebox').innerHTML = Math.floor(Math.random() * diceval) + 1;
    }

    render() {
        return (
        <div className="Dicedata-container">
            <Background/>

            <h1 className="Dicedata-d4 Dicedata-title">D4</h1>
            <h1 className="Dicedata-d6 Dicedata-title">D6</h1>
            <h1 className="Dicedata-d8 Dicedata-title">D8</h1>
            <h1 className="Dicedata-d10 Dicedata-title">D10</h1>
            <h1 className="Dicedata-d12 Dicedata-title">D12</h1>
            <h1 className="Dicedata-d20 Dicedata-title">D20</h1>

            <input type="radio" className="Dicedata-radiod4 Dicedata-radio" id="d4" name="dice" value="4"/>
            <input type="radio" className="Dicedata-radiod6 Dicedata-radio" id="d6" name="dice" value="6"/>
            <input type="radio" className="Dicedata-radiod8 Dicedata-radio" id="d8" name="dice" value="8"/>
            <input type="radio" className="Dicedata-radiod10 Dicedata-radio" id="d10" name="dice" value="10"/>
            <input type="radio" className="Dicedata-radiod12 Dicedata-radio" id="d12" name="dice" value="12"/>
            <input type="radio" className="Dicedata-radiod20 Dicedata-radio" id="d20" name="dice" value="20"/>

            <button 
                onClick={this.handleClick}
                className="Dicedata-text" type="button" id="dicebox">
                0
            </button>
        </div>
        );
    }
}
export default Dicedata;