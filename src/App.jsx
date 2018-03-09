import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Cabecera from "./componentes/Cabecera";
import Menu from "./componentes/Menu";
import Detalle from "./componentes/Detalle";
import Publi from "./componentes/Publi";

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("Cargó");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
