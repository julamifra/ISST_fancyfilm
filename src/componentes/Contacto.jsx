import React from 'react';

export default class Contacto extends React.Component {

	constructor(props){
        super(props);
    }

	componentDidMount() {
    	console.log("Cargó");
  	}

	render() {
		return (
			<ul>Correo de contacto e info</ul>
		);
	}
}