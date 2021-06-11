import React from "react";

import "./features.css"


class Features extends React.Component {
    constructor(props){
        super(props);
    }

    retAttackDiv = (attack) => {
        let arr = []
        
        for (let i = 0; i < attack.length; i++) {
            arr.push(
                <div key={"infosquaredata-actionsatt-key-"+i}>
                    <div className="infosquaredata-actions-attname">{attack[i].name}</div>
                    <div className="infosquaredata-actions-atthitdc">{attack[i].hitdc}</div>
                    <div className="infosquaredata-actions-atteffect">{attack[i].effect}</div>
                    <div className="infosquaredata-actions-attdesc">{attack[i].desc}</div>
                </div>
            )
        }
        return <div>{arr}</div>
    }

    render() {
        return (
            <div >
                <p className="infosquaredata-title" >Feats:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retAttackDiv(this.props.attack)}</div>

                <p className="infosquaredata-title" >Racial Traits:</p>

                <p className="infosquaredata-title" >Background Details:</p>

                <p className="infosquaredata-title" >Class Featues:</p>

            </div>
        );
    }
}
export default Features;