import React from 'react';

export default class Contacto extends React.Component {

	render() {
		return (
			<form action="../../public/index.html"  >
				<label className = "fuente-contacta ajustar-contacta">
				Asunto:
				<input type="text" name="asunto"/>
				</label>

				<p> </p>

				<label className = "fuente-contacta ajustar-contacta">
				Escriba su problema:
				<textarea type="text" name="problema" className = "tamaño-input" rows="10" cols="40"/>
				</label>

				<p> </p>

				<input type="submit" value="Enviar" className = "App-boton"/>
			</form>
		);
	}
}
