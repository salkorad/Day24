import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    var myLocalStorageData = localStorage.getItem("Paragon");
    var mySessionStorageData = sessionStorage.getItem("frontend");

    function getCookieValueByName(name) {
      var match = document.cookie.match(
        new RegExp("(^| )" + name + "=([^;]+)")
      );
      return match ? match[2] : "";
    }
    var myCookieData = getCookieValueByName("Year");
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };

  render() {
    return (
      <div className="container">
        <button type="button" onClick={this.setMyStorage}>
          Submit
        </button>
        <button type="button" onClick={this.getMyStorage}>
          Submit
        </button>
      </div>
    );
  }
}

export default App;
