import React from 'react';
import './App.css'

export default class Menu extends React.Component {

	constructor(props){
        super(props);
        this.contactaDestino = this.contactaDestino.bind(this);
        this.cineDestino = this.cineDestino.bind(this);
        this.carteleraDestino = this.carteleraDestino.bind(this);
        this.promocionesDestino = this.promocionesDestino.bind(this);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}
  	contactaDestino(){
  		this.props.appClick();
  	}
  	cineDestino(){
  		this.props.appClick1();
  	}
  	carteleraDestino(){
  		this.props.appClick2();
  	}
  	promocionesDestino(){
  		this.props.appClick3();
  	}

	render() {
		return (
			<div className ="App-menu">
				<div className="App-menu-boton1">
				<button id="IrCine" onClick={this.cineDestino} className="App-boton"> Cine </button>
				<button id="IrCartelera" onClick={this.carteleraDestino} className="App-boton"> Cartelera </button>
				<button id="IrContacto" onClick={this.contactaDestino} className="App-boton"> Contactar </button>
				<button id="IrPromo" onClick={this.promocionesDestino} className="App-boton"> Promociónes </button>
				</div>
			</div>
		);
	}
}