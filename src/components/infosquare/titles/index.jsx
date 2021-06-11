import React from "react";

import Background from "../background";
import "./titles.css"

import Magic from "../magic";
import Actions from "../actions";

class infosquaretitles extends React.Component {
    constructor(props){
        super(props);
        this.state = { actionsdata: true, magicdata: false, featuresdata: false, inventdata: false, notesdata: false};
    }
    componentDidMount(){
        this.actions();
    }

    actions = () => {
        this.setState({ actionsdata: true, magicdata: false, featuresdata: false, inventdata: false, notesdata: false });
    }
    spells = () => {
        this.setState({ actionsdata: false, magicdata: true, featuresdata: false, inventdata: false, notesdata: false });
    }
    features= () => {
        this.setState({ actionsdata: false, magicdata: false, featuresdata: true, inventdata: false, notesdata: false });
    
    }
    inventory= () => {
        this.setState({ actionsdata: false, magicdata: false, featuresdata: false, inventdata: true, notesdata: false });
    
    }
    notes= () => {
        this.setState({ actionsdata: false, magicdata: false, featuresdata: false, inventdata: false, notesdata: true });
    }

    render() {
        const {
            actions, powers, features, inventory, notes
        } = this.props;
        
        return (
        <div className="infosquare-container">
            <Background/>
            
            <input type="radio" id="in-actions" name="infosquare-check" className="infosquare-hidden" defaultChecked /> 
            <label htmlFor="in-actions" onClick={this.actions} className="infosquaretitle-actions infosquaretitle-titles">Actions</label>

            <input type="radio" id="in-spells" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-spells" onClick={this.spells} className="infosquaretitle-spells infosquaretitle-titles">Magic</label>

            <input type="radio" id="in-features" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-features" onClick={this.features} className="infosquaretitle-features infosquaretitle-titles">Features</label>

            <input type="radio" id="in-invent" name="infosquare-check" className="infosquare-hidden " /> 
            <label htmlFor="in-invent" onClick={this.inventory} className="infosquaretitle-invent infosquaretitle-titles">Inventory</label>

            <input type="radio" id="in-notes" name="infosquare-check" className="infosquare-hidden" /> 
            <label htmlFor="in-notes" onClick={this.notes} className="infosquaretitle-notes infosquaretitle-titles">Notes</label>
            
            {/* Data for the box*/}
            <div style={{display: this.state.actionsdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <Actions {... actions}/>
            </div>

            <div style={{display: this.state.magicdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <Magic {... powers}/>
            </div>

            <div style={{display: this.state.featuresdata ? 'block' : 'none' }} className="infosquaredata-container">

                <p className="infosquaredata-title" >Feats:</p>
                <p className="infosquaredata-title" >Class Featues:</p>
                <p className="infosquaredata-title" >Racial Traits:</p>
                <p className="infosquaredata-title" >Background Details:</p>
            </div>

            <div style={{display: this.state.inventdata ? 'block' : 'none' }} className="infosquaredata-container"> 
                <p className="infosquaredata-title" >Equiped:</p>
                <p className="infosquaredata-title" >Attened:</p>
                <p className="infosquaredata-title" >Loose Gear:</p>
            </div>


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