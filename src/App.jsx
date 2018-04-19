import React, { Component } from 'react';
import './App.css';

import Cabecera from "./componentes/Cabecera";
import Menu from "./componentes/Menu";
import Detalle from "./componentes/Detalle";
import Publi from "./componentes/Publi";
import Identidad from "./componentes/Identidad";

import Cines from "./componentes/Cines";
import Cartelera from "./componentes/Cartelera";
import Contacto from "./componentes/Contacto";

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      contactarseleccionado: 0,
      cinesseleccionado:0,
      carteleraseleccionado:0,
      promocionesseleccionado:0,
      inicio:0
    };
    this.appClick=this.appClick.bind(this);
    this.appClick1=this.appClick1.bind(this);
    this.appClick2=this.appClick2.bind(this);
    this.appClick3=this.appClick3.bind(this);
    this.appClick4=this.appClick4.bind(this);
  }

  componentDidMount() {
    console.log("Cargó");
  }

  appClick(){
    this.setState({
      contactarseleccionado: 1,
      cinesseleccionado: 0,
      carteleraseleccionado: 0,
      promocionesseleccionado: 0,
      inicio:0
    });
  }
  appClick1(){
    this.setState({
      cinesseleccionado: 1,
      contactarseleccionado: 0,
      carteleraseleccionado: 0,
      promocionesseleccionado: 0,
      inicio:0
    });
  }
  appClick2(){
    this.setState({
      carteleraseleccionado: 1,
      contactarseleccionado: 0,
      cinesseleccionado: 0,
      promocionesseleccionado: 0,
      inicio:0
    });
  }
  appClick3(){
    this.setState({
      promocionesseleccionado: 1,
      contactarseleccionado: 0,
      cinesseleccionado: 0,
      carteleraseleccionado: 0,
      inicio:0
    });
  }
  appClick4(){
    this.setState({
      promocionesseleccionado: 0,
      contactarseleccionado: 0,
      cinesseleccionado: 0,
      carteleraseleccionado: 0,
      inicio:1
    });
  }

  render() {

    return (
      <div>
        <header>
          <Cabecera appClick4={this.appClick4}/>
        </header>

        <h1>
          <Menu appClick={this.appClick} appClick1={this.appClick1} appClick2={this.appClick2} appClick3={this.appClick3}/>
        </h1>
        <div>
          <div className ="mover-izq">
            <Publi/>
          </div>
          <div className ="mover-der">
            <Publi/>
          </div>
          <div className="mover-centro">
          <Detalle inicio = {this.state.inicio} contactarseleccionado = {this.state.contactarseleccionado} cinesseleccionado = {this.state.cinesseleccionado} carteleraseleccionado = {this.state.carteleraseleccionado} promocionesseleccionado = {this.state.promocionesseleccionado} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
