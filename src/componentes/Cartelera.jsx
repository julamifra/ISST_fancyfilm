import React from 'react';
import Tabla from './Tabla';
import Lista from './Lista';

export default class Cartelera extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Las pelis</ul>
		);
	}
}