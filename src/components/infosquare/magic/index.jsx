import React from "react";

import "./magic.css"


class Magic extends React.Component {
    constructor(props){
        super(props);
    }

    retspellDiv = (props) => {
        let arr = []

        for (let i = 0; i < props.length; i++) {
            arr.push(
                <div key={"infosquaredata-magic-key-"+i}>
                    <div className="infosquaredata-magic-spellname">{props[i].name}</div>
                    <div className="infosquaredata-magic-spellrange">{props[i].RangeArea}</div>
                    <div className="infosquaredata-magic-spelldur">{props[i].dur}</div>
                    <div className="infosquaredata-magic-spelleffect">{props[i].effect}</div>
                </div>
            )
        }
        return <div>{arr}</div>
    }

    render() {
        return (
            <div className="is-magic-container">
                <p className="infosquaredata-title" >Slots:</p>
                
                <p className="infosquaredata-title" >Cantrips:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell0)}</div>
                <p className="infosquaredata-title" >1st Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell1)}</div>
                <p className="infosquaredata-title" >2nd Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell2)}</div>
                <p className="infosquaredata-title" >3rd Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell3)}</div>
                <p className="infosquaredata-title" >4th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell4)}</div>
                <p className="infosquaredata-title" >5th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell5)}</div>
                <p className="infosquaredata-title" >6th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell6)}</div>
                <p className="infosquaredata-title" >7th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell7)}</div>
                <p className="infosquaredata-title" >8th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell8)}</div>
                <p className="infosquaredata-title" >9th Level:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell9)}</div>
            </div>
        );
    }
}
export default Magic;