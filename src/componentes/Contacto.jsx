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
			<div className ="tabla">
				<h1 className ="App-CoU"> Contacto </h1>
					<p> </p>
					<tr className ="espacio-fila"> Vía telefónica:
					<th> 902 XXX 210; 0,08 €/minuto desde un teléfono fijo (las tarifas móviles pueden variar) </th>
					</tr>
					<p> </p>
					<tr className ="espacio-fila"> Vía correo:              
					<th> fancyfilm@crack.com; Escríbenos tus dudas, quejas o ideas</th>
					</tr>
			</div>
		);
	}
}