import React from "react";
import { Link } from "react-scroll";

import "./inventory.css";

class Features extends React.Component {

    render() {
        return (
            <div >
                <Link className="infosquaredata-title" id="Equiped" to="Attened" spy={true} smooth={true}>Equiped:</Link>
                <textarea  type="text" className="infosquaredata-title-textbox"></textarea >
                <div className="infosquaredata-title-padding"/>
                
                <Link className="infosquaredata-title" id="Attened" to="LooseGear" spy={true} smooth={true}>Attened:</Link>
                <textarea  type="text" className="infosquaredata-title-textbox"></textarea >
                <div className="infosquaredata-title-padding"/>
                
                <div id="LooseGear" href="#Equiped" className="infosquaredata-title" >Loose Gear:</div>
                <textarea  type="text" className="infosquaredata-title-textbox"></textarea >
                <div className="infosquaredata-title-padding"/>
            </div>
        );
    }
}
export default Features;