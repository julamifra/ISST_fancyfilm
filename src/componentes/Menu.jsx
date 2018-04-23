import React from 'react';
import './App.css'

export default class Menu extends React.Component {

	constructor(props){
		super(props);
		this.irAlgoCi = this.irAlgoCi.bind(this);
		this.irAlgoCa = this.irAlgoCa.bind(this);
		this.irAlgoCo = this.irAlgoCo.bind(this);
		this.irAlgoPro = this.irAlgoPro.bind(this);
    	}

  	irAlgoCi(){
  		this.props.appClick("listaCines");
  	}
	irAlgoCa(){
  		this.props.appClick("cartelera");
  	}
	irAlgoCo(){
  		this.props.appClick("contacto");
  	}
	irAlgoPro(){
  		this.props.appClick("promo");
  	}
  	

	render() {
		return (
			<div className ="App-menu">
				<div className="App-menu-boton1">
				<button id="IrCine" onClick={this.irAlgoCi} className="App-boton"> Cine </button>
				<button id="IrCartelera" onClick={this.irAlgoCa} className="App-boton"> Cartelera </button>
				<button id="IrContacto" onClick={this.irAlgoCo} className="App-boton"> Contactar </button>
				<button id="IrPromo" onClick={this.irAlgoPro} className="App-boton"> Publicar promoción </button>
				</div>
			</div>
		);
	}
}
