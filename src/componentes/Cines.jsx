import React from 'react';
import Tabla from './Tabla';
import Lista from './Lista';

export default class Cines extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Los Cines</ul>
		);
	}
}