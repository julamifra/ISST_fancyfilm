import React from 'react';
import Cartelera from './Cartelera';
import Cines from './Cines';
import Contacto from './Contacto';

export default class Detalle extends React.Component {

	constructor(props){
        super(props);
    }

	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<div>
			<Cartelera /*pelis={this.props.pelis}*//>
			<Cines /*sines={this.props.sines}*//>
			<Contacto /*contact={this.props.contact}*//>
			</div>
		);
	}
}