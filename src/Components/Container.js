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
        this.ref = React.createRef();
        this.handlePower = this.handlePower.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        this.clickDrumPad = this.clickDrumPad.bind(this);
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
            display: `Volume ${e.target.value}`,
            volume: e.target.value
        })
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
                name={e.name}
            />
        ));
        return(
            <div id="display">
                <div className="btnGroup">{buttons}</div>
                <div className="screenBox">
                    <Screen value={this.state.display}/>
                    <div className="controls">
                        <button onClick={this.handlePower}><i class="fas fa-power-off"></i></button>
                        <Slider onChange={this.handleVolume}/>
                    </div>
                </div>
                
            </div>
            
        )
    }
}

export default Container;