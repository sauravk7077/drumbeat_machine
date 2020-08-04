import React from "react";
import Slider from "./Slider";
import Button from "./Button";
import {drum, misc} from "../musicData";

class Container extends React.Component{
    constructor() {
        super();
        this.state = {
            volume: 50,
            power: false,
            mode: "drum"
        }
        this.handlePower = this.handlePower.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
    }
    handlePower() {
        this.setState(s =>({
            power: !s.power
        }));
    }
    handleVolume(e) {
        this.setState({
            volume: e.target.value
        })
    }

    render() {
        const musicList = this.state.mode === 'drum' ? drum: misc;
        const buttons = musicList.map(e=>(
            <Button
                key={e.keyCode}
                volume={this.state.volume}
                data={e}disabled={this.state.power}
            />
        ));
        return(
            <div id="display">
                <div>{buttons}</div>
                <div>
                    <button onClick={this.handlePower}>Power</button>
                    <Slider onChange={this.handleVolume}/>

                </div>
            </div>
            
        )
    }
}

export default Container;