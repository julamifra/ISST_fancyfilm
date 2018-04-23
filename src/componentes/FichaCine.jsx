import React from 'react';
import FormComentario from './FormComentario';

export default class FichaCine extends React.Component {

	render() {
  		let cine = this.props.cineSeleccionado;

      		let nombre = cine.nombreCine;
      		let direccion = cine.direccion;

      		return (
      			<div>
			      <ul className="estiloListaCine">
				      <li> Nombre:{nombre} </li>
              <p> </p>
				      <li> Direccion:{direccion} </li>  
			      </ul>
            <FormComentario/>
            </div>
      		);
  	}
}
