import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };
  getLocalStorage = () => {
    var myLocalStorageData = localStorage.getItem("Arena");
    return myLocalStorageData;
  };
  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.setLocalStorage}>
          Submit
        </button>
        <button type="button" onClick={this.getLocalStorage}>
          Submit
        </button>
      </div>
    );
  }
}
export default App;
