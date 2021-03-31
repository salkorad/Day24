import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };
  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.setLocalStorage}>
          Submit
        </button>
      </div>
    );
  }
}
export default App;
