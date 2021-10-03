import { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return "Hello React!";
  }
}
render(<App />, document.querySelector("#content"));
