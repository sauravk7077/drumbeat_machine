import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyPress);

    }
    handleKeyPress(e){
        if(e.key.toLowerCase() === this.props.data.keyCode.toLowerCase())
        this.playSound();
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyPress)
    }
    handleClick(){
        this.playSound();
    }
    playSound() {
        let audio = document.getElementById(this.props.data.keyCode);
        audio.volume = 0.01 * this.props.volume;
        audio.currentTime = 0;
        if(!this.props.disabled)
            audio.play();
    }
    render() {
        const {keyCode, fileName, name} = this.props.data;
        return (
            <button className="drum-pad" onClick={this.handleClick} disabled={this.props.disabled}>{keyCode}
                <audio id={keyCode}>
                    <source src={`./audio/drum/${fileName}`}/>
                </audio>
            </button>
        )
    }
}

export default Button;