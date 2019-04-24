import React from "react";
import ReactDOM from "react-dom";

import Message from "./components/message/message.js";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "hello world"
    };
  }
  render() {
    return (
      <div>
        <Message text={this.state.text} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
