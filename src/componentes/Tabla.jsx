import React from 'react';
import TablaElement from './TablaElement';

export default class Tabla extends React.Component {

	constructor(props){
        super(props);
    }

  	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Tabla de opciones para filtrar la lista </ul>
		);
	}
}