import React from "react";

import "./actions.css"


class Actions extends React.Component {
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

    retGenActionDiv = (props) => {
        let arr = []
        
        for (let i = 0; i < props.length; i++) {
            arr.push(
                <div key={"infosquaredata-actions-key-"+i}>
                    <div className="infosquaredata-actions-name">{props[i].name}</div>
                    <div className="infosquaredata-actions-desc">{props[i].desc}</div>
                </div>
            )
        }
        return <div>{arr}</div>
    }

    render() {
        return (
            <div >
                <p className="infosquaredata-title" >Attack Actions:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retAttackDiv(this.props.attack)}</div>

                <p className="infosquaredata-title">Bonus Actions:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retGenActionDiv(this.props.bonus)}</div>

                <p className="infosquaredata-title">Reactions:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retGenActionDiv(this.props.reaction)}</div>

                <p className="infosquaredata-title">Limited Actions:</p>
                <div className="infosquaredata-text infosquaredata-all">{this.retGenActionDiv(this.props.limited)}</div>
            </div>
        );
    }
}
export default Actions;