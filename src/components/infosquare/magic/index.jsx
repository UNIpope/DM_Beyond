import React from "react";
import "./magic.css";

class Magic extends React.Component {
    // hash function for unique keys
    cyrb53 = (str, seed = Math.random()) => {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i)
            h1 = Math.imul(h1 ^ ch, 2654435761)
            h2 = Math.imul(h2 ^ ch, 1597334677)
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909)
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909)
        return 4294967296 * (2097151 & h2) + (h1>>>0)
    }

    retspellDiv = (props) => {
        let arr = []
        for (let i = 0; i < props.length; i++) {
            arr.push(
                <div key={"infosquaredata-magic-key-"+i}>
                    <div className="infosquaredata-magic-spellname"> 
                        <a className="infosquaredata-magic-link" href={props[i].link}> {props[i].name}</a>
                    </div>
                    <div className="infosquaredata-magic-spellrange">{props[i].RangeArea}</div>
                    <div className="infosquaredata-magic-spelldur">{props[i].dur}</div>
                    <div className="infosquaredata-magic-spelleffect">{props[i].effect}</div>
                </div>
            )
        }

        // spell div keys must be unique 
        try {
            let tohash = props[0].name
            return <div key={this.cyrb53(tohash)}>{arr}</div>
        }catch{
            return null
        }
        
    }

    retwarlockslotlessDiv = (props) => {
        let arr = []

        arr.push(<p key={this.cyrb53("cantrips")} className="infosquaredata-title">Cantrips :</p>)
        arr.push(this.retspellDiv(props["spell"+0]))

        arr.push(<p key={this.cyrb53("Abiding")} className="infosquaredata-title">Abiding Spells :</p>)

        for (let i = 1; i < Object.keys(props).length; i++) {
            arr.push(this.retspellDiv(props["spell"+i]))
        }
        return <div className="infosquaredata-text infosquaredata-all">{arr}</div>
    }

    retDiv = (props) => {
        if (props.type === "warlock:slotless"){
            return (
                <div className="is-magic-container">
                    {this.retwarlockslotlessDiv(this.props.caster.spelllist)}
                </div>
            )
        }

        return (
            <div className="is-magic-container">     
                <p className="infosquaredata-title" >Cantrips :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell0)}</div>
                <p className="infosquaredata-title" >1st Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell1)}</div>
                <p className="infosquaredata-title" >2nd Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell2)}</div>
                <p className="infosquaredata-title" >3rd Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell3)}</div>
                <p className="infosquaredata-title" >4th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell4)}</div>
                <p className="infosquaredata-title" >5th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell5)}</div>
                <p className="infosquaredata-title" >6th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell6)}</div>
                <p className="infosquaredata-title" >7th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell7)}</div>
                <p className="infosquaredata-title" >8th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell8)}</div>
                <p className="infosquaredata-title" >9th Level :</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retspellDiv(this.props.caster.spelllist.spell9)}</div>
            </div>
        )
    }

    render() {
        return (this.retDiv(this.props.caster))
    }
}
export default Magic;