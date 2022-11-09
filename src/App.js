import logo from "./logo.svg";
import "./App.css";
import React from "react";
let listOfImages = [];

class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(
      require.context("./images/", false, /\.(png|jpe?g|svg)$/)
    );
  }
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <div style={{ margin: "25px" }}>
            {listOfImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt='info'
                style={{ width: "500px" }}
              ></img>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
