import React from 'react';
import popcorn from './imagenes/popcorn.svg';

export default class Inicio extends React.Component {

	render() {
		return (
			<div className="separar-inicio">
				<p className="fuente-inicio-descripcion"> Bienvenidos a Fancyfilm</p>
				<p  className="centrar fuente-contacta"> Portal especializado en Películas y valoraciones </p>
				<p  className="centrar fuente-contacta"> Si quieres unirte a la comunidad no dudes en registrarte para poder comentar!!</p>
				<img src={popcorn} alt="popcorn" className="estilo-popcorn"/>
			</div>
		);
	}
}
