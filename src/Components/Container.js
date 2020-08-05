import React from "react";
import Slider from "./Slider";
import Button from "./Button";
import Screen from "./Screen";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.css"
import {drum, misc} from "../musicData";
import "../styles/Container.css";

class Container extends React.Component{
    constructor() {
        super();
        this.state = {
            volume: 50,
            power: false,
            mode: "drum",
            display: ""
        }
        this.handlePower = this.handlePower.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.clickDrumPad = this.clickDrumPad.bind(this);
        this.changeMode = this.changeMode.bind(this);
    }
    handlePower() {
        let screenText = ! this.state.power?"Power OFF":"Power ON";

        this.setState(s =>({
            display : screenText,
            power: !s.power
        }));
    }
    handleVolume(e) {
        this.setState({
            display: `Volume ${e.target.value}%`,
            volume: e.target.value
        })
    }
    changeMode(e) {
        this.setState(s=>({
            disabled: `${this.state.mode.toUpperCase()} MODE`,
            mode: s.mode === 'drum'? 'electric': 'drum'
        }));
    }

    clickDrumPad(id) {
        this.setState({display: document.getElementById(id).getAttribute('data-name')});
    }

    render() {
        const musicList = this.state.mode === 'drum' ? drum: misc;
        const buttons = musicList.map(e=>(
            <Button
                key={e.keyCode}
                volume={this.state.volume}
                data={e}disabled={this.state.power}
                onClick={()=> {this.clickDrumPad(e.keyCode)}}
                mode={this.state.mode}
            />
        ));
        return(
            <div id="display">
                <div className="btnGroup">{buttons}</div>
                <div className="screenBox">
                    <Screen disabled={this.state.power} value={this.state.display}/>
                    <div className="controls">
                        <button onClick={this.handlePower}><i className="fas fa-power-off"></i></button>
                        <button onClick={this.changeMode}>{this.state.mode}</button>
                        <Slider onChange={this.handleVolume}/>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Container;