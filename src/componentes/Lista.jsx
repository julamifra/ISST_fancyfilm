import React from 'react';
import ListaElement from './ListaElement';

export default class Lista extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Lista de pelis o cines </ul>
		);
	}
}