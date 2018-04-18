import React from 'react';
import './App.css'

export default class Menu extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<div className ="App-menu">
				<div className="App-menu-boton1">
				<button className="App-boton"> Cine </button>
				<button className="App-boton"> Cartelera </button>
				<button className="App-boton"> Contactar </button>
				</div>
			</div>
		);
	}
}