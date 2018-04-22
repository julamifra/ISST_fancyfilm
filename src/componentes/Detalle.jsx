import React from 'react';
import Cartelera from './Cartelera';
import Cines from './Cines';
import Contacto from './Contacto';
import Menu from './Menu';

export default class Detalle extends React.Component {

	constructor(props){
        super(props);
    }

	componentDidMount() {
    	console.log("Cargó");
  	}


	render() {
		let cinesseleccionado = this.props.cinesseleccionado;
		let carteleraseleccionado = this.props.carteleraseleccionado;

		if(this.props.cinesseleccionado === 1){
			return (
			<div>
			
			<Cines cinesseleccionado = {cinesseleccionado} />
			</div>
			);
		}
		if(this.props.contactarseleccionado === 1){
			return (
			<div>
			<Contacto /*contact={this.props.contact}*//>
			</div>
			);
		}
		if(this.props.carteleraseleccionado === 1){
			return (
			<div>
			<Cartelera carteleraseleccionado = {carteleraseleccionado} />
			</div>
			);
		}
		if(this.props.promocionesseleccionado === 1){
			return (
			<div  className="App-CoU">
			AQUI VA PROMOCIONES
			</div>
			);
		}
		if(this.props.inicio === 1){
			return (
			<div  className="App-CoU">
			INICIO
			</div>
			);
		}
		else{
			return (<div> </div> );
		}
	}
}