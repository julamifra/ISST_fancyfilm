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
			<ul>Esta va a ser jodida</ul>
		);
	}
}