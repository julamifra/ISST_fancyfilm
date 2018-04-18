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
			<div>
				<h1> Contacto </h1>
					<h2> Vía telefónica: </h2>
					<p> 902 XXX 210; 0,08 €/minuto desde un teléfono fijo (las tarifas móviles pueden variar) </p>
					<h2> Vía correo: </h2>
					<p> fancyfilm@crack.com; Escríbenos tus dudas, quejas o ideas</p>
			</div>
		);
	}
}