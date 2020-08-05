import React from "react";

class Button extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.playSound = this.playSound.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.reloadTrack = this.reloadTrack.bind(this);
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
    handleClick(e){
        this.playSound();
    }
    playSound() {
        let audio = document.getElementById(this.props.data.keyCode).firstElementChild;
        audio.volume = 0.01 * this.props.volume;
        audio.currentTime = 0;
        if(!this.props.disabled)
            audio.play();
        this.props.onClick();
    }

    reloadTrack() {
        let audio = document.getElementById(this.props.data.keyCode).firstElementChild
        audio.load();
        audio.play();
    }
    render() {
        let src = this.props.mode === 'drum'? "./audio/drum/": "./audio/electric/"
        const {keyCode, fileName, name} = this.props.data;
        return (
            <button data-name={name} className="drum-pad" id={keyCode} onClick={this.handleClick} disabled={this.props.disabled}>{keyCode}
                <audio onChange={this.reloadTrack} src={`${src}${fileName}`}>
                </audio>
            </button>
        )
    }
}

export default Button;