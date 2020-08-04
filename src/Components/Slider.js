import React from "react";
import "../styles/Slider.css"

class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
        this.handeChange = this.handeChange.bind(this);
    }

    handeChange(event) {
        this.setState({
            value: event.target.value
        })
        this.props.onChange(event);
    }

    render() {
        return (
            <input type="range" min="0" max="100" value={this.state.value} step="1" orient="vertical" onChange={this.handeChange}/>
        )
    }
}

export default Slider;