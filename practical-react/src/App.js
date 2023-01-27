import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";

// Three different ways to write a function
const Body = () => <p className="App-Intro">Hello, from React!</p>;

// const Body = () => {
//     return (
//         <p className="App-intro">
//             Hello, from React!
//         </p>
//     );
// }

// function Body() {
//     return (
//         <p className="App-intro">
//             Hello, from React!
//         </p>
//     )
// }

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
