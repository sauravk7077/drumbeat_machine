import React from "react";
import ReactDOM from "react-dom";
import Container from "./Components/Container";

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