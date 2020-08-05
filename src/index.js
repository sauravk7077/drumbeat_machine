import React from "react";
import ReactDOM from "react-dom";
import Container from "./Components/Container";
import "./styles/App.css"

class App extends React.Component{
    render() {
        return (
            <div id="drum-machine">
                <Container/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));