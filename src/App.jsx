import React, { Component } from 'react';
import './App.css';

import Cabecera from "./componentes/Cabecera";
import Menu from "./componentes/Menu";
import Detalle from "./componentes/Detalle";
import Publi from "./componentes/Publi";
import Identidad from "./componentes/Identidad";

class App extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("Cargó");
  }

  render() {
    return (
      <div>
        <header>
          <Cabecera/>
        </header>

        <h1>
          <Menu/>
        </h1>
        <div>
          <div className ="mover-izq">
            <Publi/>
          </div>
          <div className ="mover-der">
            <Publi/>
          </div>
          <div className="mover-centro">
          <Detalle/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
