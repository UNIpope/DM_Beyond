import React from "react";
import "./features.css";

class Features extends React.Component {
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

    retdesc = (props) => {
        let splitprops = props.split("\n");
        let arr = []

        for (let i = 0; i < splitprops.length; i++) {
            arr.push(<p key={"infosquaredata-featurepara-key-"+ this.cyrb53(splitprops[i])} className="infosquaredata-features-paragraph">{splitprops[i]}</p>)
        }
        return <div className="infosquaredata-features-desc">{arr}</div>
    }

    retDiv = (props) => {
        let arr = []
        
        for (let i = 0; i < props.length; i++) {
            arr.push(
                <div key={"infosquaredata-features-key-"+this.cyrb53(props[i].name)}>
                    <div className="infosquaredata-features-name">{props[i].name}</div>
                    {this.retdesc(props[i].desc)}
                </div>
            )
        }
        return <div>{arr}</div>
    }

    render() {
        return (
            <div >
                <p className="infosquaredata-title" >Class Featues :</p>
                <div className="infosquaredata-text infosquaredata-all">
                    {this.retDiv(this.props.classfeats.abilities)}</div>

                <p className="infosquaredata-title" >Feats :</p>
                <div className="infosquaredata-text infosquaredata-all">
                    {this.retDiv(this.props.feats)}</div>

                <p className="infosquaredata-title" >Racial Traits :</p>
                <div className="infosquaredata-text infosquaredata-all">
                    {this.retDiv(this.props.racialtraits)}</div>

                <p className="infosquaredata-title" >Other Effects :</p>
                <div className="infosquaredata-text infosquaredata-all">
                    {this.retDiv(this.props.other)}</div>
            </div>
        );
    }
}
export default Features;