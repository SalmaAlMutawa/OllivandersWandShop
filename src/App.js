import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import wands from "./wands.js";
import WandList from "./WandList";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <div className="row">
          <div className="content col-12">
            <WandList wands={wands} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
