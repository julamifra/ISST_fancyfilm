import React from 'react';

export default class Promociones extends React.Component {

	render() {
		return(<div>
			<form action="http://localhost:8080/ISST/ComentariosServlet">	
					<input type="hidden" name="nombrePeli" value={this.props.nombrePeli} />
					<label className = "fuente-contacta ajustar-contacta">
						Valoracion: 
						<input type="number" name="valoracion" required />
					</label>
					<label className = "fuente-contacta ajustar-contacta">
						Comentarios: 
						<textarea type="text" name="cuerpo" className = "tamaño-input" rows="10" cols="40"  />
					</label>
					<p> </p>
					<input type="submit" value="Publicar Comentario" className = "App-boton"/>
			</form>
		</div>)
	}
}
