import React from "react";

import Background from "../background";
import "./titles.css"

class infosquaretitles extends React.Component {
    actions = () => {
        this.setState({ actionsdata: true, spellsdata: false, featuresdata: false, inventdata: false, notesdata: false });
    }
    spells = () => {
        this.setState({ actionsdata: false, spellsdata: true, featuresdata: false, inventdata: false, notesdata: false });
    }
    features= () => {
        this.setState({ actionsdata: false, spellsdata: false, featuresdata: true, inventdata: false, notesdata: false });
    
    }
    inventory= () => {
        this.setState({ actionsdata: false, spellsdata: false, featuresdata: false, inventdata: true, notesdata: false });
    
    }
    notes= () => {
        this.setState({ actionsdata: false, spellsdata: false, featuresdata: false, inventdata: false, notesdata: true });
    }

    retAttackDiv = (attack) => {
        let arr = []
        
        for (let i = 0; i < attack.length; i++) {
            arr.push(
                <div>
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
                <div>
                    <div className="infosquaredata-actions-name">{props[i].name}</div>
                    <div className="infosquaredata-actions-desc">{props[i].desc}</div>
                </div>
            )
        }
        return <div>{arr}</div>
    }

    constructor(props){
        super(props);
        this.state = { actionsdata: true, spellsdata: false, featuresdata: false, inventdata: false, notesdata: false};
    }
    componentDidMount(){
        this.actions();
    }

    render() {
        const {
            actions, spells, features, inventory, notes
        } = this.props;
        
        return (
        <div className="infosquare-container">
            <Background/>
            
            <input type="radio" id="in-actions" name="infosquare-check" className="infosquare-hidden" defaultChecked /> 
            <label htmlFor="in-actions" onClick={this.actions} className="infosquaretitle-actions infosquaretitle-titles">Actions</label>

            <input type="radio" id="in-spells" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-spells" onClick={this.spells} className="infosquaretitle-spells infosquaretitle-titles">Spells</label>

            <input type="radio" id="in-features" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-features" onClick={this.features} className="infosquaretitle-features infosquaretitle-titles">Features</label>

            <input type="radio" id="in-invent" name="infosquare-check" className="infosquare-hidden " /> 
            <label htmlFor="in-invent" onClick={this.inventory} className="infosquaretitle-invent infosquaretitle-titles">Inventory</label>

            <input type="radio" id="in-notes" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-notes" onClick={this.notes} className="infosquaretitle-notes infosquaretitle-titles">Notes</label>

            {/* actions */}
            <div style={{display: this.state.actionsdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >Attack Actions:</p>
                <div className="infosquaredata-text infosquaredata-all-actions">{this.retAttackDiv(actions.attack)}</div>

                <p className="infosquaredata-title">Bonus Actions:</p>
                <div className="infosquaredata-text infosquaredata-all-actions">{this.retGenActionDiv(actions.bonus)}</div>

                <p className="infosquaredata-title">Reactions:</p>
                <div className="infosquaredata-text infosquaredata-all-actions">{this.retGenActionDiv(actions.reaction)}</div>

                <p className="infosquaredata-title">Limited Actions:</p>
                <div className="infosquaredata-text infosquaredata-all-actions">{this.retGenActionDiv(actions.limited)}</div>
            </div>

            {/* Spells */}
            <div style={{display: this.state.spellsdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >Slots:</p>
                <p className="infosquaredata-title" >Cantrips:</p>
                <p className="infosquaredata-title" >1st Level:</p>
                <p className="infosquaredata-title" >2nd Level:</p>
                <p className="infosquaredata-title" >3rd Level:</p>
                <p className="infosquaredata-title" >4th Level:</p>
                <p className="infosquaredata-title" >5th Level:</p>
                <p className="infosquaredata-title" >6th Level:</p>
                <p className="infosquaredata-title" >7th Level:</p>
                <p className="infosquaredata-title" >8th Level:</p>
            </div>

            {/* Features */}
            <div style={{display: this.state.featuresdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >Feats:</p>
                <p className="infosquaredata-title" >Class Featues:</p>
                <p className="infosquaredata-title" >Racial Traits:</p>
                <p className="infosquaredata-title" >Background Details:</p>
            </div>

            {/* Inventory */}
            <div style={{display: this.state.inventdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >Equiped:</p>
                <p className="infosquaredata-title" >Attened:</p>
                <p className="infosquaredata-title" >Loose Gear:</p>
            </div>

            {/* Notes */}
            <div style={{display: this.state.notesdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >About Self:</p>
                <p className="infosquaredata-title" >Friends:</p>
                <p className="infosquaredata-title" >Foes:</p>
                <p className="infosquaredata-title" >World information:</p>
            </div>

        </div>
        );
    }
}
export default infosquaretitles;