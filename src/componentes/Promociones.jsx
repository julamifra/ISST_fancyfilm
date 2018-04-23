import React from 'react';

export default class Promociones extends React.Component {

	render() {
			if(this.props.cineLogeado === null || this.props.cineLogeado === undefined){
					return <div>Por favor, inicie sesión como CINE para poder publicar promociones</div>
		    	}else{
				return (
				<form action="http://localhost:8080/ISST/PromocionesServlet"  >
					<input type="hidden" name="cine" value={this.props.cineLogeado} />
					<label className = "fuente-contacta ajustar-contacta">
					Nombre de la promoción:
					<input type="text" name="titulo"/>
					</label>

					<p> </p>

					<label className = "fuente-contacta ajustar-contacta">
					Descripción:
					<textarea type="text" name="descripcion" className = "tamaño-input" rows="10" cols="40"/>
					</label>

					<p> </p>

					<input type="submit" value="Publicar" className = "App-boton"/>
				</form>
				);
			}
	}
}
