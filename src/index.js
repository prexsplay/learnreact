/* import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
 */

import React from 'react';
import ReactDom from 'react-dom';

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { seconds: 0};
    }

    tick(){
       this.setState(state =>({
           seconds: this.state.seconds + 1

       }))
    }
     
    componentDidMount() {
        this.interval = setInterval (() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return(
            <div>
                Seconds: {this.state.seconds}
            </div>
        )
    }
}

ReactDOM.render(<Timer />, document.getElementById('root'));