import React from 'react';
import logo from './LOGO.png';
import './App.css'


export default class Cabecera extends React.Component {

	constructor(props){
		super(props);
		this.irPrincipal = this.irPrincipal.bind(this);
		this.loginClick = this.loginClick.bind(this);
    	}

  	irPrincipal(){
  		this.props.appClick("inicio");
  	}
	loginClick(){
  		this.props.appClick("login");
  	}

	render() {
		return(
			<div className = "Cabecera">
					<h2 className = "mover-der">
						<button className="App-boton"> Registrarse </button> 
						<button className="App-boton" onClick={this.loginClick}> LOGIN </button> 
					</h2>
					<h1 className = "App-title"> FANCYFILM </h1>
					<img onClick={this.irPrincipal} className = "App-foto" src={logo} alt='logo' /> 
					
					
			</div>
		);
	}
}
